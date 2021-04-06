import * as constants from './constants';

const getMoviesSuccessAction = (movies) => ({ type: constants.GET_MOVIES_SUCCESS, payload: movies });

const getMovieSuccessAction = (movie) => ({ type: constants.GET_MOVIE_SUCCESS, payload: movie });

const getMoviesErrorAction = (error) => ({ type: constants.GET_MOVIES_ERROR, payload: error });

const getMoviesPendingAction = () => ({ type: constants.GET_MOVIES_PENDING });

const getMoviePendingAction = () => ({ type: constants.GET_MOVIE_PENDING });

export const getMoviesAction = (filter = undefined, sortBy = constants.DEFAULT_SORT_BY) => async (dispatch) => {
  try {
    dispatch(getMoviesPendingAction());
    let url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;
    if (filter) {
      url = `${url}&filter=${filter}`;
    }

    await fetch(url).then((res) => res.json()).then((res) => dispatch(getMoviesSuccessAction(res.data)));
  } catch (error) {
    dispatch(getMoviesErrorAction(error));
  }
};

export const getMovieAction = (id) => async (dispatch) => {
  try {
    dispatch(getMoviePendingAction());
    const url = `${constants.URL}/${id}`;
    await fetch(url).then((res) => res.json()).then((res) => dispatch(getMovieSuccessAction(res)));
  } catch (error) {
    dispatch(getMoviesErrorAction(error));
  }
};

export const createMovieAction = (input) => async (dispatch) => {
  await fetch(`${constants.URL}`, {
    body: input,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  }).then(dispatch(getMoviesAction()));
};

export const updateMovieAction = (input) => async (dispatch) => {
  await fetch(`${constants.URL}`, {
    body: input,
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
  }).then(dispatch(getMoviesAction()));
};
