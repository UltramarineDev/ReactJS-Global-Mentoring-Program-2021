import React from 'react';

import MovieForm from '../movie-form';

import styles from './AddMovie.module.scss';

const AddMovieFormComponent = () => (
  <>
    <div className={styles.addMovieWrapper}>
      <div className={styles.title}>ADD MOVIE</div>
      <MovieForm />
    </div>
  </>
);

export default AddMovieFormComponent;
