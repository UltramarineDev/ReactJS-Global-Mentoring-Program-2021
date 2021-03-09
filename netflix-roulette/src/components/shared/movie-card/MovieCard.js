import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.scss';

const MovieCardComponent = ({ imageUrl, name, genre, year }) => (
  <>
    <div className={styles.cardWrapper}>
      <div className={styles.image}>
        <img src={imageUrl} alt="Movie image"/>
      </div>
      <div className={styles.nameWraper}>
        <div className={styles.name}>{name}</div>
      <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.genre}>{genre}</div>
    </div>
  </>
);

MovieCardComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCardComponent;
