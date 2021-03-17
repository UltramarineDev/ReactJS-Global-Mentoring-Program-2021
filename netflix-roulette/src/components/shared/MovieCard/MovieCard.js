import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

import OptionItem from '../dropdown/OptionItem/OptionItem';
import styles from './MovieCard.module.scss';

const MovieCard = ({ 
  imageUrl, 
  name, 
  genre, 
  year, 
  onActionsClick, 
  showOptions, 
  actions, 
  onActionClick,
  hasImageError,
  onImageError,
 }) => (
  <>
    <div className={styles.cardWrapper}>
      <a onClick={onActionsClick} className={styles.dotsMenu}>
        <FontAwesomeIcon icon='ellipsis-v'/>
      </a>
      {showOptions &&
        <div className={styles.actions}>
        {actions.map(({ id, name }) => 
          <OptionItem 
            key={id}
            value={id}
            label={name}
            onClick={()=> onActionClick(id)} />)}
        </div>
      }
      <div className={hasImageError ? styles.noImageWrapper : styles.image}>
        {hasImageError ?
          <div className={styles.noImage}><FontAwesomeIcon icon='image'/></div> :
          <img src={imageUrl} alt="Movie image" onError={onImageError}/>
        }
      </div>
      <div className={styles.nameWraper}>
        <div className={styles.name}>{name}</div>
      <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.genre}>{genre}</div>
    </div>
  </>
);

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onActionsClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  showOptions: PropTypes.bool.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onImageError: PropTypes.func.isRequired,
  hasImageError: PropTypes.bool.isRequired,
};

export default MovieCard;
