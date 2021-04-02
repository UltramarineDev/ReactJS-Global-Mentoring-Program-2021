import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MovieImage.module.scss';

const MovieImage = ({ imageUrl }) => {
  const [hasImageError, setImageError] = useState(false);

  return (
    <div className={hasImageError ? styles.noImageWrapper : styles.image}>
      {hasImageError
        ? <div className={styles.noImage}><FontAwesomeIcon icon="image" /></div>
        : <img src={imageUrl} alt="Movie image" onError={() => setImageError(true)} />}
    </div>
  );
};

MovieImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MovieImage;
