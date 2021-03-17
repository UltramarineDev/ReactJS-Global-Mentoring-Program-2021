import React from 'react';

import MovieForm from '../MovieForm/MovieForm';
import { wordings } from '/src/locales/wordings';
import styles from './AddMovie.module.scss';

const AddMovieForm = () => (
  <div className={styles.addMovieWrapper}>
    <div className={styles.title}>{wordings.add_movie}</div>
    <MovieForm />
  </div>
);

export default AddMovieForm;
