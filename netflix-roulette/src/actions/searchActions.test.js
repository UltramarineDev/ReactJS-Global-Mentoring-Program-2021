import * as constants from '../constants';
import { setSearchExpressionAction } from './searchActions';

describe('search actions', () => {
  it('setSearchExpressionAction', () => {
    const search = 'test';
    const expected = {
      type: constants.SET_SEARCH_EXPRESSION,
      payload: search,
    };

    expect(setSearchExpressionAction(search)).toEqual(expected);
  });
});
