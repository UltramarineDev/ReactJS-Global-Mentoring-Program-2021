import React from 'react';
import { wordings } from '/src/locales/wordings';
import MovieForm from '../MovieForm/MovieForm';

const EditMovieForm = () => (
  <MovieForm title={wordings.edit_movie}/>
);

export default EditMovieForm;
