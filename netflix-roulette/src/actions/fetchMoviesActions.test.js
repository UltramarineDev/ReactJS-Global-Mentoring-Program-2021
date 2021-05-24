import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as constants from '../constants';
import { getMoviesAction, getMovieAction } from './fetchMoviesActions';

const fetchMock = require('fetch-mock-jest');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('getMovieAction', () => {
    const id = 1;
    const url = `${constants.URL}/${id}`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      body: { name: '1' },
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIE_PENDING,
      },
      {
        type: constants.GET_MOVIE_SUCCESS,
        payload: { name: '1' },
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMovieAction(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getMovieAction error', () => {
    const id = 1;
    const url = `${constants.URL}/ ${id}`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      body: { name: '1' },
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIE_PENDING,
      },
      {
        type: constants.GET_MOVIE_ERROR,
        payload: expect.any(Array),
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMovieAction(id)).then(() => {
      expect(store.getActions().length).toEqual(expectedActions.length);
    });
  });

  it('getMoviesAction filter and search not defined', () => {
    const sortBy = constants.DEFAULT_SORT_BY;
    const url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      data: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
      {
        type: constants.GET_MOVIES_SUCCESS,
        payload: [1, 2, 3],
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMoviesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getMoviesAction search not defined', () => {
    const sortBy = constants.DEFAULT_SORT_BY;
    const filter = 'COMEDY';
    const url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}&filter=${filter}`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      data: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
      {
        type: constants.GET_MOVIES_SUCCESS,
        payload: [1, 2, 3],
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMoviesAction(filter)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getMoviesAction filter not defined', () => {
    const sortBy = constants.DEFAULT_SORT_BY;
    const search = 'movie1';
    const url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}&search=${search}&searchBy=title`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      data: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
      {
        type: constants.GET_MOVIES_SUCCESS,
        payload: [1, 2, 3],
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMoviesAction(undefined, constants.DEFAULT_SORT_BY, search)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('getMoviesAction error', () => {
    const sortBy = constants.DEFAULT_SORT_BY;
    const url = `${constants.URL}?
                sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;

    fetchMock.getOnce(url, {
      headers: { 'content-type': 'application/json' },
      payload: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
      {
        type: constants.GET_MOVIES_ERROR,
        payload: expect.any(Array),
      },
    ];

    const store = mockStore({});
    return store.dispatch(getMoviesAction()).then(() => {
      expect(store.getActions().length).toEqual(expectedActions.length);
    });
  });
});
