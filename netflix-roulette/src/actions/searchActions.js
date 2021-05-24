import * as constants from '../constants';

export const setSearchExpressionAction = (search) => ({
  type: constants.SET_SEARCH_EXPRESSION,
  payload: search,
});
