import React from 'react';
import { wordings } from '/src/locales/wordings';
import MovieForm from '../MovieForm/MovieForm';

import styles from './EditMovie.module.scss';

const EditMovieForm = () => (
  <div className={styles.editMovieWrapper}>
    <div className={styles.title}>{wordings.edit_movie}</div>
    <MovieForm />
  </div>
);

export default EditMovieForm;
