import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MovieImage.module.scss';

const MovieImage = ({ hasImageError, onImageError, imageUrl }) => (
  <div className={hasImageError ? styles.noImageWrapper : styles.image}>
      {hasImageError ?
        <div className={styles.noImage}><FontAwesomeIcon icon='image'/></div> :
        <img src={imageUrl} alt="Movie image" onError={onImageError}/>
      }
  </div>
);

MovieImage.propTypes = {
  onImageError: PropTypes.func.isRequired,
  hasImageError: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MovieImage;