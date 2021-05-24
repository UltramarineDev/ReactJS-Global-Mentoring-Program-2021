import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { wordings } from 'locales/wordings';
import { getMovieAction, updateMovieAction } from 'actions';

import MovieForm from '../MovieForm/MovieForm';
import { getInitialValues, buildAddMovieInput } from '../AddMovie/utils';

const EditMovieForm = ({ movieId, onSave }) => {
  const { fetchMovies } = useSelector((state) => state);
  const { movie } = fetchMovies;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieAction(movieId));
  }, []);

  const handleSave = (values) => {
    onSave();
    const input = buildAddMovieInput(values);
    input.id = movieId;
    dispatch(updateMovieAction(input));
  };

  return (
    <MovieForm title={wordings.edit_movie} initialValues={getInitialValues(movie)} onSave={handleSave} />
  );
};

EditMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditMovieForm;
