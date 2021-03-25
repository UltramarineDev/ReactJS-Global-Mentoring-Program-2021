import * as constants from './constants';

const getMoviesSuccessAction = movies => 
  ({ type: constants.GET_MOVIES, payload: movies });

const getMovieSuccessAction = movie => 
  ({ type: constants.GET_MOVIE, payload: movie });

export const getMoviesAction = (filter = undefined, sortBy = constants.DEFAULT_SORT_BY) => async (dispatch) => {
  let url = `${constants.URL}?sortBy=${sortBy}&sortOrder=${constants.DEFAULT_SORT_ORDER}&limit=${constants.DEFAULT_LIMIT}`;

  if (filter) {
    url = `${url}&filter=${filter}`;
  }
  const response = await fetch(url).then(res => res.json());
  dispatch(getMoviesSuccessAction(response.data));
};

export const getMovieAction = (id) => async (dispatch) => {
   const response = await fetch(`${constants.URL}/${id}`).then(res => res.json());
   dispatch(getMovieSuccessAction(response));
};

export const createMovieAction = (input) => async (dispatch) => {
  const response = await fetch(`${constants.URL}`, {
      body: input,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
};

export const updateMovieAction = (input) => async (dispatch) => {
  const response = await fetch(`${constants.URL}`, {
      body: input,
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    });
  };
