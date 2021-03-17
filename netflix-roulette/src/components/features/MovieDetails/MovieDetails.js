import React from 'react';

import styles from './MovieDetails.module.scss';

const MovieDetails = () => (
  <div className={styles.root}>
      <div className={styles.image}></div>
      <div className={styles.description}>
        <div className={styles.title}></div>
        <div className={styles.subTitle}></div>
        <div className={styles.dataWrapper}>
          <div className={styles.year}></div>
          <div className={styles.duration}></div>
        </div>
        <div className={styles.synopsis}></div>
      </div>
  </div>
);

export default MovieDetails;