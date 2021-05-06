import * as constants from '../constants';

export const initialState = {
  movies: [],
  movie: { },
  isMoviesLoading: false,
  isMovieLoading: false,
  error: null,
  search: undefined,
  isMovieDeleted: false,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.DELETE_MOVIE_PENDING: {
      return { ...state, isMovieLoading: true };
    }
    case constants.DELETE_MOVIE: {
      return { ...state, isMovieLoading: false, isMovieDeleted: true };
    }
    default:
      return state;
  }
};

export default reducer;
