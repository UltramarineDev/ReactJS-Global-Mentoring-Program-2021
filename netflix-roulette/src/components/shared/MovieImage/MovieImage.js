import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MovieImage.module.scss';

const MovieImage = ({ imageUrl, displayBorder }) => {
  const [hasImageError, setImageError] = useState(false);
  const shouldShowIcon = hasImageError || !imageUrl;

  return (
    <div className={hasImageError || displayBorder || !imageUrl ? styles.noImageWrapper : styles.image}>
      {shouldShowIcon ? <FontAwesomeIcon icon="image" className={styles.noImage} />
        : <img src={imageUrl} onError={() => setImageError(true)} alt="" />}
    </div>
  );
};

MovieImage.propTypes = {
  imageUrl: PropTypes.string,
  displayBorder: PropTypes.bool,
};

MovieImage.defaultProps = {
  imageUrl: undefined,
  displayBorder: false,
};

export default MovieImage;
