import * as constants from '../constants';
import reducer, { initialState } from './searchReducer';

describe('search movie reducer', () => {
  it('SET_SEARCH_EXPRESSION', () => {
    const action = {
      type: constants.SET_SEARCH_EXPRESSION,
      payload: 'search',
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      search: action.payload,
    });
  });

  it('unknown action type', () => {
    const action = {
      type: 'unknown',
      payload: 'search',
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
    });
  });
});
