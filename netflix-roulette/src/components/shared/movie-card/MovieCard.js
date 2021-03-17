import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

import OptionItem from '../dropdown/option-item';
import styles from './MovieCard.module.scss';

const MovieCardComponent = ({ 
  imageUrl, 
  name, 
  genre, 
  year, 
  onActionsClick, 
  showOptions, 
  actions, 
  onActionClick,
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
  onActionsClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  showOptions: PropTypes.bool.isRequired,
  onActionClick: PropTypes.func.isRequired,
};

export default MovieCardComponent;
