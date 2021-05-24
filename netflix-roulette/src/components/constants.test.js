import * as constants from './constants';

describe('Constants tests', () => {
  it('GET_MOVIES_SUCCESS', () => {
    expect(constants.GET_MOVIES_SUCCESS).toBe('GET_MOVIES_SUCCESS');
  });

  it('GET_MOVIES_PENDING', () => {
    expect(constants.GET_MOVIES_PENDING).toBe('GET_MOVIES_PENDING');
  });

  it('GET_MOVIE_PENDING', () => {
    expect(constants.GET_MOVIE_PENDING).toBe('GET_MOVIE_PENDING');
  });

  it('GET_MOVIE_ERROR', () => {
    expect(constants.GET_MOVIE_ERROR).toBe('GET_MOVIE_ERROR');
  });

  it('GET_MOVIES_ERROR', () => {
    expect(constants.GET_MOVIES_ERROR).toBe('GET_MOVIES_ERROR');
  });

  it('SET_SEARCH_EXPRESSION', () => {
    expect(constants.SET_SEARCH_EXPRESSION).toBe('SET_SEARCH_EXPRESSION');
  });

  it('DELETE_MOVIE_PENDING', () => {
    expect(constants.DELETE_MOVIE_PENDING).toBe('DELETE_MOVIE_PENDING');
  });

  it('DELETE_MOVIE', () => {
    expect(constants.DELETE_MOVIE).toBe('DELETE_MOVIE');
  });

  it('URL', () => {
    expect(constants.URL).toBe('http://localhost:4000/movies');
  });

  it('DEFAULT_SORT_ORDER', () => {
    expect(constants.DEFAULT_SORT_ORDER).toBe('desc');
  });

  it('DEFAULT_LIMIT', () => {
    expect(constants.DEFAULT_LIMIT).toBe('50');
  });

  it('DEFAULT_SORT_BY', () => {
    expect(constants.DEFAULT_SORT_BY).toBe('release_date');
  });
});
