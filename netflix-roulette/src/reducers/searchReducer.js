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
    case constants.SET_SEARCH_EXPRESSION: {
      return { ...state, search: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
