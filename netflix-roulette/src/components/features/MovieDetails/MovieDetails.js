import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Loader from 'components/shared/Loader/Loader';
import { emptyValue, dashEmptyValue } from 'components/shared/constants';
import { wordings } from 'locales/wordings';
import MovieImage from 'components/shared/MovieImage/MovieImage';
import Header from 'components/shared/Header/Header';
import StoryCard from 'components/shared/StoryCard/StoryCard';
import MoviesList from 'components/shared/MoviesList/MoviesList';
import { getMovieAction } from 'components/actions';

import styles from './MovieDetails.module.scss';

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie);
  const isLoading = useSelector(((state) => state.isMovieLoading));
  const error = useSelector(((state) => state.error));
  const dispatch = useDispatch();
  const { id: movieId } = useParams();

  const duration = movie.runtime ? `${movie.runtime} ${wordings.min}` : emptyValue;
  const year = movie ? new Date(movie.release_date).getFullYear() : dashEmptyValue;

  useEffect(() => {
    dispatch(getMovieAction(movieId));
    if (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <StoryCard gradientClassName={styles.gradientClassName}>
        <div className={styles.root}>
          <Header>
            <Link to="/" className={styles.icon}>
              <FontAwesomeIcon icon="search" />
            </Link>
          </Header>
          <div className={styles.movieDetails}>
            {isLoading ? <Loader />
              : (
                <>
                  <MovieImage imageUrl={movie.poster_path} displayBorder />
                  <div className={styles.description}>
                    <div className={styles.titleWrapper}>
                      <span className={styles.title}>{movie.title}</span>
                      {movie.vote_average > 0 && <span className={styles.rating}>{movie.vote_average}</span>}
                    </div>
                    <div className={styles.tagLine}>{movie.tagline}</div>
                    <div className={styles.dataWrapper}>
                      <span className={styles.year}>{year}</span>
                      <span>{duration}</span>
                    </div>
                    <div>{movie.overview}</div>
                  </div>
                </>
              )}
          </div>
        </div>
      </StoryCard>
      <MoviesList />
    </>
  );
};

export default MovieDetails;
