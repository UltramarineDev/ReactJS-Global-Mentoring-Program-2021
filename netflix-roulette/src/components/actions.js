import * as constants from './constants';

const getMoviesSuccessAction = movies => 
  ({ type: constants.GET_MOVIES, payload: movies });

const getMovieSuccessAction = movie => 
  ({ type: constants.GET_MOVIE, payload: movie });

export const getMoviesAction = () => async (dispatch) => {
  try {
      const response = await fetch(`${constants.URL}?sortBy=release_date&sortOrder=desc&limit=50`).then(res => res.json());
      dispatch(getMoviesSuccessAction(response.data));
    } catch (error) {
      //
    }
};

export const filterMoviesAction = (filter, sortBy) => async (dispatch) => {
  try {
      const url = filter ? `${constants.URL}?sortBy=${sortBy}&sortOrder=desc&filter=${filter}&limit=50` : `${constants.URL}?sortBy=${sortBy}&sortOrder=desc&limit=50`
      const response = await fetch(url).then(res => res.json());
      dispatch(getMoviesSuccessAction(response.data));
    } catch (error) {
      //
    }
};

export const getMovieAction = (id) => async (dispatch) => {
  try {
      const response = await fetch(`${constants.URL}/${id}`).then(res => res.json());
      dispatch(getMovieSuccessAction(response));
    } catch (error) {
      //
    }
};

export const createMovieAction = (input) => async (dispatch) => {
  const response = await fetch(`${constants.URL}`, {
      body: JSON.stringify(state),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
  //if status code success -> update movies list
};

export const updateMovieAction = (input) => async (dispatch) => {
    const response = await fetch(`${constants.URL}`, {
        body: JSON.stringify(state),
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
      });
    //if status code success -> update movies list
  };
