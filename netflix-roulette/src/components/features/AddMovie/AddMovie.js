import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { wordings } from '../../../locales/wordings';
import { addMovieAction } from '../../../actions';

import { getInitialValues, buildAddMovieInput } from './utils';
import MovieForm from '../MovieForm/MovieForm';

const AddMovieForm = ({ onSave }) => {
  const dispatch = useDispatch();

  const handleSave = (values) => {
    onSave();
    const input = buildAddMovieInput(values);
    dispatch(addMovieAction(input));
  };

  return (
    <MovieForm title={wordings.add_movie} onSave={handleSave} initialValues={getInitialValues()} />
  );
};

AddMovieForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default AddMovieForm;
