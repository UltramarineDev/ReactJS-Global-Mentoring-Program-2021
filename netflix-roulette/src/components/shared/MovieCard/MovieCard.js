import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { emptyFunc } from '/src/components/shared/constants';
import MovieImage from '../MovieImage/MovieImage';
import OptionItem from '../dropdown/OptionItem/OptionItem';
import styles from './MovieCard.module.scss';

const MovieCard = ({
  movie,
  actions, 
  onActionClick,
 }) => {
  const genre = movie ? movie.genres.join(", ") : '-';
  const year = movie ? new Date(movie.release_date).getFullYear() : '-';
  const [showOptions, setShowOptions] = useState(false);

  const handleItemClick = (id) => {
    setShowOptions(false);
    onActionClick(id, movie.id);
  };

   return (
    <div className={styles.cardWrapper}>
      <a onClick={() => setShowOptions(showOptions => !showOptions)} className={styles.dotsMenu}>
        <FontAwesomeIcon icon='ellipsis-v'/>
      </a>
      {showOptions &&
        <div className={styles.actions}>
        {actions.map(({ id, name }) => 
          <OptionItem 
            key={id}
            value={id}
            label={name}
            onClick={handleItemClick} />)}
        </div>
      }
      <a onClick={emptyFunc}>
        <MovieImage imageUrl={movie.poster_path} />
      </a>
      <div className={styles.nameWraper}>
        <div className={styles.name}>{movie.title}</div>
      <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.genre}>{genre}</div>
    </div>
)};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onActionClick: PropTypes.func.isRequired,
};

export default MovieCard;
