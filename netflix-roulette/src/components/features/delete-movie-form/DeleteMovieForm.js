import React from 'react';

import styles from './DeleteMovie.module.scss';

const DeleteMovieFormComponent = () => (
  <>
    <p className={styles.header}>DELETE MOVIE</p>
    <p className={styles.content}>Are you sure you want to delete this movie?</p>
  </>
);

export default DeleteMovieFormComponent;
