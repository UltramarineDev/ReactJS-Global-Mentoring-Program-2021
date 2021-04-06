import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const Store = () => {
  const initialState = {
    movies: [],
    movie: { },
    isMoviesLoading: false,
    isMovieLoading: false,
    error: false,
  };

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default Store;
