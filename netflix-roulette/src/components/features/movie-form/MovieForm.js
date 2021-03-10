import React from 'react';

import styles from './MovieForm.module.scss';

const AddMovieFormComponent = () => (
  <>
    <form className={styles.form}>
      <p>ADD MOVIE</p>
      <input></input>
      <p>RELEASE DATE</p>
      <input></input>
      <p>MOVIE URL</p>
      <input></input>
      <p>GENRE</p>
      <input></input>
      <p>OVERVIEW</p>
      <input></input>
      <p>RUNTIME</p>
      <input></input>
    </form>
  </>
);

export default AddMovieFormComponent;
