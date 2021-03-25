import * as constants from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_MOVIES: {
      return {...state, movies: action.payload };
    }
    case constants.GET_MOVIE: {
      return {...state, movie: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
