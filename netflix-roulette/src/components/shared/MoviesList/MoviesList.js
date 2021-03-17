import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import MovieCard from '../MovieCard/MovieCardContainer';
import styles from './MoviesList.module.scss';

const MovieList = ({ movies, onActionClick, actions }) => (
  <div className={styles.moviesList}>
    {movies.map((movie) => (
      <MovieCard
        key={uniqueId()}
        imageUrl={movie.poster_path}
        name={movie.title}
        genres={movie.genres}
        releaseDate={movie.release_date}
        onActionClick={onActionClick}
        actions={actions}
    />))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onActionClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieList;
