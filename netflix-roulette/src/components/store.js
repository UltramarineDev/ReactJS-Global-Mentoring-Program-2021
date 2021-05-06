import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const Store = () => {
  const initialState = {
    movies: [],
    movie: { },
    isMoviesLoading: false,
    isMovieLoading: false,
    error: false,
    search: undefined,
    isMovieDeleted: false,
  };

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default Store;
