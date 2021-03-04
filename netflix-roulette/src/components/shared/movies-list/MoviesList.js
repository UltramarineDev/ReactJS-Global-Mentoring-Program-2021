import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import MovieCard from '../movie-card';
import styles from './MoviesList.module.scss';

const MovieListComponent = ({ movies }) => (
  <>
    <div className={styles.moviesList}>
      {movies.map((movie) => (
        <MovieCard
          key={uniqueId()}
          imageUrl={movie.poster_path}
          name={movie.title}
          genres={movie.genres}
          releaseDate={movie.release_date}
      />))}
    </div>
  </>
);

MovieListComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieListComponent;