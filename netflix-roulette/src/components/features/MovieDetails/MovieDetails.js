import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { wordings } from '/src/locales/wordings';
import MovieImage from '/src/components/shared/MovieImage/MovieImageContainer';
import Header from '/src/components/shared/Header/Header';
import StoryCard from '/src/components/shared/StoryCard/StoryCard';
import MoviesList from '/src/components/shared/MoviesList/MoviesListContainer';

import styles from './MovieDetails.module.scss';

const MovieDetails = ({ movie, year, onClick }) => {
  const duration = `${movie.runtime} ${wordings.min}`;
  
  return (
    <>
      <StoryCard gradientClassName={styles.gradientClassName}>
        <div className={styles.root}>
          <Header>
            <a onClick={onClick} className={styles.icon}>
              <FontAwesomeIcon icon="search"/>
            </a>
          </Header>
          <div className={styles.movieDetails}>
            <MovieImage imageUrl={movie.poster_path} />
            <div className={styles.description}>
              <div className={styles.title}>{movie.title}</div>
              <div className={styles.tagLine}>{movie.tagline}</div>
              <div className={styles.dataWrapper}>
                <span className={styles.year}>{year}</span>
                <span>{duration}</span>
              </div>
              <div>{movie.overview}</div>
            </div>
          </div>
       </div>
      </StoryCard>
      <MoviesList />
    </>
)};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieDetails;