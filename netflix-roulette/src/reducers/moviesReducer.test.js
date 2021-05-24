import * as constants from '../constants';
import reducer, { initialState } from './moviesReducer';

describe('movies reducer', () => {
  it('GET_MOVIES_PENDING', () => {
    const action = {
      type: constants.GET_MOVIES_PENDING,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isMoviesLoading: true,
    });
  });

  it('GET_MOVIE_PENDING', () => {
    const action = {
      type: constants.GET_MOVIE_PENDING,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isMovieLoading: true,
    });
  });

  it('GET_MOVIES_SUCCESS', () => {
    const moviesInitialState = {
      movies: [],
      isMoviesLoading: true,
      error: null,
    };

    const action = {
      type: constants.GET_MOVIES_SUCCESS,
      payload: [1, 2, 3],
    };

    expect(reducer(moviesInitialState, action)).toEqual({
      ...moviesInitialState,
      isMoviesLoading: false,
      movies: action.payload,
    });
  });

  it('GET_MOVIE_SUCCESS', () => {
    const moviesInitialState = {
      movie: {},
      isMovieLoading: true,
      error: null,
    };

    const action = {
      type: constants.GET_MOVIE_SUCCESS,
      payload: { name: 'movie' },
    };

    expect(reducer(moviesInitialState, action)).toEqual({
      ...moviesInitialState,
      isMovieLoading: false,
      movie: action.payload,
    });
  });

  it('GET_MOVIES_ERROR', () => {
    const moviesInitialState = {
      movies: [],
      isMoviesLoading: true,
      error: null,
    };

    const action = {
      type: constants.GET_MOVIES_ERROR,
      payload: 'error',
    };

    expect(reducer(moviesInitialState, action)).toEqual({
      ...moviesInitialState,
      isMoviesLoading: true,
      error: action.payload,
    });
  });

  it('GET_MOVIE_ERROR', () => {
    const moviesInitialState = {
      movie: [],
      isMovieLoading: true,
      error: null,
    };

    const action = {
      type: constants.GET_MOVIE_ERROR,
      payload: 'error',
    };

    expect(reducer(moviesInitialState, action)).toEqual({
      ...moviesInitialState,
      isMovieLoading: true,
      error: action.payload,
    });
  });

  it('DEFAULT', () => {
    const action = {
      type: 'unknown action type',
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
    });
  });
});
