import { combineReducers } from 'redux';

import fetchMovies from './moviesReducer';
import searchBy from './searchReducer';
import deleteMovie from './deleteMovieReducer';

export default combineReducers({
  fetchMovies,
  searchBy,
  deleteMovie,
});
