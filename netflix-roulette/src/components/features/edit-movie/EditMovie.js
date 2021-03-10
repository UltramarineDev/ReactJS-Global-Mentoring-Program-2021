import React from 'react';

import MovieForm from '../movie-form';

import styles from './EditMovie.module.scss';

const EditMovieFormComponent = () => (
  <>
    <div className={styles.editMovieWrapper}>
      <div className={styles.title}>EDIT MOVIE</div>
      <MovieForm />
    </div>
  </>
);

export default EditMovieFormComponent;
