import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { emptyFunc } from '/src/components/shared/constants';
import { wordings } from '/src/locales/wordings';
import MovieImage from '/src/components/shared/MovieImage/MovieImage';
import Header from '/src/components/shared/Header/Header';
import StoryCard from '/src/components/shared/StoryCard/StoryCard';
import MoviesList from '/src/components/shared/MoviesList/MoviesList';
import { getMovieAction } from '/src/components/actions';

import styles from './MovieDetails.module.scss';

const MovieDetails = ({ getMovie, movieId, movie }) => {
  const duration = `${movie.runtime} ${wordings.min}`;
  const year = movie ? new Date(movie.release_date).getFullYear() : '-';

  useEffect(() => {
    getMovie(movieId);
  }, [])

  return (
    <>
      <StoryCard gradientClassName={styles.gradientClassName}>
        <div className={styles.root}>
          <Header>
            <a onClick={emptyFunc} className={styles.icon}>
              <FontAwesomeIcon icon="search"/>
            </a>
          </Header>
          <div className={styles.movieDetails}>
            <MovieImage imageUrl={movie.poster_path} />
            <div className={styles.description}>
              <div className={styles.titleWrapper}>
                <span className={styles.title}>{movie.title}</span>
                <span className={styles.rating}>{movie.vote_average}</span>
              </div>
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
  movieId: PropTypes.number,
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

//TODO: implement in Routing module?
MovieDetails.defaultProps = {
  movieId: 269149,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => dispatch(getMovieAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);