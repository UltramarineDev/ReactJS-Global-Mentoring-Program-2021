import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import  Footer from '../src/components/shared/footer/Footer'
import { useStore, initializeStore } from '../src/components/store'
import { getMovieSuccessAction, getMoviesSuccessAction } from '../src/actions/fetchMoviesActions'
import '../styles/globals.scss'
import * as constants from '../src/constants';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  return (
     <Provider store={store}>
        <Component {...pageProps} />
        <Footer />
     </Provider>
  )
}

const getFetchUrl = (filter, sortBy, search) => {
  let url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;
  if (filter && filter !== tabs.ALL) {
    url = `${url}&filter=${filter}`;
  }

  if (search) {
    url = `${url}&search=${search}&searchBy=title`;
  }

  return url;
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reduxStore = initializeStore({});

  const { query = '', id, sortBy = constants.DEFAULT_SORT_BY, filter } = appContext.router.query || {};
  const { dispatch } = reduxStore;

  const responseMovies = await fetch(getFetchUrl(filter, sortBy, query));
  const movies = await responseMovies.json();
  dispatch(
    getMoviesSuccessAction(movies.data),
  )
  if (id) {
    const url = `${constants.URL}/${id}`;
    const responseMovie = await fetch(url);
    const movie = await responseMovie.json();
    dispatch(getMovieSuccessAction(movie))
  }
  appProps.pageProps = { ...appProps.pageProps, initialReduxState: reduxStore.getState() }
  return appProps
}

export default MyApp
