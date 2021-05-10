import * as constants from '../constants';

const initialState = {
  search: undefined,
};

const searchBy = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_EXPRESSION: {
      return { ...state, search: action.payload };
    }
    default:
      return state;
  }
};

export default searchBy;
