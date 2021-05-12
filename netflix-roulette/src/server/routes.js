const Home = require('../components/features/Home/Home');
const MovieDetails = require('../components/features/MovieDetails/MovieDetails');

export default [
  {
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
