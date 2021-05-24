import * as constants from '../constants';
import { getMoviesAction } from './fetchMoviesActions';

const deleteMovieCompletedAction = () => ({ type: constants.DELETE_MOVIE });

const deleteMoviePendingAction = () => ({ type: constants.DELETE_MOVIE_PENDING });

export const addMovieAction = (input) => async (dispatch) => {
  await fetch(`${constants.URL}`, {
    body: JSON.stringify(input),
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(dispatch(getMoviesAction()));
};

export const updateMovieAction = (input) => async (dispatch) => {
  await fetch(`${constants.URL}`, {
    body: JSON.stringify(input),
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  }).then(dispatch(getMoviesAction()));
};

export const deleteMovieAction = (movieId) => async (dispatch) => {
  if (!movieId) {
    return;
  }

  try {
    dispatch(deleteMoviePendingAction());
    await fetch(`${constants.URL}/${movieId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(dispatch(deleteMovieCompletedAction()));
  } catch (error) {
    console.log('delete movie error');
  }
};
