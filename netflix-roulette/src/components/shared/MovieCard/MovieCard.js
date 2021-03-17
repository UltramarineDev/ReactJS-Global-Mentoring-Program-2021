import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

import MovieImage from '../MovieImage/MovieImageContainer';
import OptionItem from '../dropdown/OptionItem/OptionItem';
import styles from './MovieCard.module.scss';

const MovieCard = ({
  movie,
  genre, 
  year, 
  onActionsClick, 
  showOptions, 
  actions, 
  onActionClick,
  onMovieClick,
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
      <a onClick={onMovieClick}>
        <MovieImage imageUrl={movie.poster_path} />
      </a>
      <div className={styles.nameWraper}>
        <div className={styles.name}>{movie.title}</div>
      <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.genre}>{genre}</div>
    </div>
  </>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onActionsClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  showOptions: PropTypes.bool.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieCard;
