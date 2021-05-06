import * as constants from '../constants';
import reducer, { initialState } from './deleteMovieReducer';

describe('delete movie reducer', () => {
  it('DELETE_MOVIE_PENDING', () => {
    const action = {
      type: constants.DELETE_MOVIE_PENDING,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isMovieLoading: true,
    });
  });

  it('DELETE_MOVIE', () => {
    const action = {
      type: constants.DELETE_MOVIE,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isMovieLoading: false,
      isMovieDeleted: true,
    });
  });
});
