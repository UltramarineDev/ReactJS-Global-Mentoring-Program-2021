import React from 'react';

import MovieForm from '../MovieForm/MovieForm';
import { wordings } from '/src/locales/wordings';

const AddMovieForm = () => (
  <MovieForm title={wordings.add_movie} />
);

export default AddMovieForm;
