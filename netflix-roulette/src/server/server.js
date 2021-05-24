// require('babel-register')({
//   stage: 0,
// });

const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchPath } = require('react-router');
const path = require('path');
const React = require('react');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');

const Home = require('../components/features/Home/Home');
const MovieDetails = require('../components/features/MovieDetails/MovieDetails');
const config = require('../../webpack.config.server');
const App = require('../components/App/App');
const indexHTML = require('./views');
const reducers = require('../reducers');

const compiler = webpack(config);
const app = new Express();
const routes = [{
  path: '/',
  component: Home,
  exact: true,
},
{
  path: '/search/:query',
  component: Home,
},
{
  path: '/movie/:id',
  component: MovieDetails,
},
];

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }),
);
app.use(webpackHotMiddleware(compiler));

// serve all static files
app.use(Express.static(path.join(__dirname, '../public')));

// handle request, create a new Redux store instance.
app.use(async (req, res, next) => {
  req.reduxStore = createStore(reducers, applyMiddleware(thunk));
});

app.get('*', async (request, response) => {
  const promises = routes.reduce((matches, route) => {
    const match = matchPath(request.url, route.path, route);
    if (match && match.isExact) {
      matches.push(
        route.component.fetchData
          ? route.component.fetchData({
            store: request.reduxStore,
            params: match.params,
          })
          : Promise.resolve(null),
      );
    }
    return matches;
  }, []);

  await Promise.all(promises);

  const initialState = request.reduxStore.getState();
  const context = {};

  const ProviderElement = React.createElement(
    Provider,
    { store: request.reduxStore },
    React.createElement(App),
  );
  const StaticRouterElement = React.createElement(
    StaticRouter,
    { location: request.url, context },
    ProviderElement,
  );
  const appHtml = renderToString(StaticRouterElement);

  const html = indexHTML(appHtml, initialState);

  response.send(html);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
