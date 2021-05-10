import * as constants from '../constants';

const initialState = {
  isMovieLoading: false,
  isMovieDeleted: false,
};

const deleteMovie = (state = initialState, action) => {
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

export default deleteMovie;
