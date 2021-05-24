import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as constants from '../constants';
import { addMovieAction, updateMovieAction, deleteMovieAction } from './movieActions';

const fetchMock = require('fetch-mock-jest');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('addMovieAction', () => {
    const input = {};
    const response = {
      status: 200,
      body: { data: '1234' },
    };
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    const options = { method: 'POST', headers, body: input };

    fetchMock.mock(constants.URL, response, options);

    const sortBy = constants.DEFAULT_SORT_BY;
    const urlGet = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;

    fetchMock.getOnce(urlGet, {
      headers: { 'content-type': 'application/json' },
      data: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
    ];

    const store = mockStore({});
    return store.dispatch(addMovieAction(input)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('updateMovieAction', () => {
    const input = {};
    const response = {
      status: 200,
      body: { data: '1234' },
    };
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    const options = { method: 'PUT', headers, body: input };

    fetchMock.mock(constants.URL, response, options);

    const sortBy = constants.DEFAULT_SORT_BY;
    const urlGet = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;
    fetchMock.mock(urlGet, { data: [1, 2, 3] });

    const expectedActions = [
      {
        type: constants.GET_MOVIES_PENDING,
      },
    ];

    const store = mockStore({});
    return store.dispatch(updateMovieAction(input)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleteMovieAction', () => {
    const movieId = null;
    const expectedActions = [];

    const store = mockStore({});
    return store.dispatch(deleteMovieAction(movieId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleteMovieAction', () => {
    const movieId = 1;
    const response = { status: 200 };
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    const options = { method: 'DELETE', headers };

    fetchMock.mock(`${constants.URL}/${movieId}`, response, options);

    const expectedActions = [
      { type: constants.DELETE_MOVIE_PENDING },
      { type: constants.DELETE_MOVIE },
    ];

    const store = mockStore({});
    return store.dispatch(deleteMovieAction(movieId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleteMovieAction error', () => {
    console.log = jest.fn();
    const movieId = 1;
    fetchMock.getOnce('http/ url', {
      headers: { 'content-type': 'application/json' },
      payload: [1, 2, 3],
    });

    const expectedActions = [
      {
        type: constants.DELETE_MOVIE_PENDING,
      },
    ];

    const store = mockStore({});
    return store.dispatch(deleteMovieAction(movieId)).then(() => {
      expect(console.log).toHaveBeenCalledWith('delete movie error');
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
