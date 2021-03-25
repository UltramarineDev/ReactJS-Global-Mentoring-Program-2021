import { GET_MOVIES_SUCCESS, URL } from './constants';

const getMoviesSuccessAction = movies => ({
    type: GET_MOVIES_SUCCESS,
    movies,
});

export const getMoviesAction = () => async (dispatch) => {
  try {
      const response = await fetch(`${URL}?sortBy=release_date&sortOrder=desc&limit=50`).then(res => res.json());
      dispatch(getMoviesSuccessAction(response.data));
    } catch (error) {
      //
    }
};

export const filterMoviesAction = (filter, sortBy) => async (dispatch) => {
    try {
        const url = filter ? `${URL}?sortBy=${sortBy}&sortOrder=desc&filter=${filter}&limit=50` : `${URL}?sortBy=${sortBy}&sortOrder=desc&limit=50`
        const response = await fetch(url).then(res => res.json());
        dispatch(getMoviesSuccessAction(response.data));
      } catch (error) {
        //
      }
};

export const createMovieAction = (input) => async (dispatch) => {
  const response = await fetch(`${URL}`, {
      body: JSON.stringify(state),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
  //if status code success -> update movies list
};

export const updateMovieAction = (input) => async (dispatch) => {
    const response = await fetch(`${URL}`, {
        body: JSON.stringify(state),
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
      });
    //if status code success -> update movies list
  };

export const deleteMovieAction = (id) => async (dispatch) => {
  const response = await fetch(`${URL}/${id}`, {
      body: JSON.stringify(state),
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  //if status code success -> update movies list
};
