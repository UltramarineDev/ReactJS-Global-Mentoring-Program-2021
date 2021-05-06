import { combineReducers } from 'redux';

import fetchMovies from './moviesReducer';
import searchBy from './searchReducer';
import deleteMovie from './deleteMovieReducer';

const rootReducer = combineReducers({
  fetchMovies,
  searchBy,
  deleteMovie,
});

export default rootReducer;
