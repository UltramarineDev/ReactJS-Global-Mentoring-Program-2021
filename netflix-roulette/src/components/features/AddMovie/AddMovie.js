import React from 'react';

import { wordings } from 'locales/wordings';

import MovieForm from '../MovieForm/MovieForm';

const AddMovieForm = () => (
  <MovieForm title={wordings.add_movie} />
);

export default AddMovieForm;
