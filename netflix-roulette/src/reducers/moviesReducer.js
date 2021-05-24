import * as constants from '../constants';

export const initialState = {
  movies: [],
  movie: { },
  isMoviesLoading: false,
  isMovieLoading: false,
  error: null,
};

const fetchMovies = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_MOVIES_SUCCESS: {
      return { ...state, movies: action.payload, isMoviesLoading: false };
    }
    case constants.GET_MOVIE_SUCCESS: {
      return { ...state, movie: action.payload, isMovieLoading: false };
    }
    case constants.GET_MOVIES_PENDING: {
      return { ...state, isMoviesLoading: true };
    }
    case constants.GET_MOVIE_PENDING: {
      return { ...state, isMovieLoading: true };
    }
    case constants.GET_MOVIE_ERROR: {
      return { ...state, error: action.payload };
    }
    case constants.GET_MOVIES_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default fetchMovies;
