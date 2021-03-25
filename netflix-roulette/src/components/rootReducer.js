import { GET_MOVIES_SUCCESS } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      const { movies } = action;
      return {...state, movies };
    }
    default:
      return state;
  }
};

export default reducer;
