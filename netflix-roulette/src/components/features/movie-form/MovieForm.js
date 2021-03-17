import React from 'react';

import styles from './MovieForm.module.scss';

const MovieFormComponent = () => (
  <>
    <form className={styles.form}>
      <p className={styles.label}>TITLE</p>
      <input></input>
      <p className={styles.label}>RELEASE DATE</p>
      <input></input>
      <p className={styles.label}>MOVIE URL</p>
      <input></input>
      <p className={styles.label}>GENRE</p>
      <input></input>
      <p className={styles.label}>OVERVIEW</p>
      <input></input>
      <p className={styles.label}>RUNTIME</p>
      <input></input>
    </form>
  </>
);

export default MovieFormComponent;
