import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import Loader from '../../shared/Loader/Loader';
import { emptyValue } from '../../shared/constants';
import { wordings } from '../../../locales/wordings';
import MovieImage from '../../shared/MovieImage/MovieImage';
import Header from '../../shared/Header/Header';
import StoryCard from '../../shared/StoryCard/StoryCard';
import MoviesList from '../../shared/MoviesList/MoviesList';
import { getMovieAction } from '../../../actions';
import { useRouter } from 'next/router'

import styles from '../../../../styles/MovieDetails.module.scss';

const MovieDetails = () => {
  const router = useRouter();
  const { id: movieId } = router.query;

  const { fetchMovies } = useSelector((state) => state);
  const { movie, isMovieLoading: isLoading } = fetchMovies;
  const dispatch = useDispatch();

  const duration = movie && movie.runtime ? `${movie.runtime} ${wordings.min}` : emptyValue;
  const year = new Date(movie.release_date).getFullYear();

  useEffect(() => {
    dispatch(getMovieAction(movieId));
  }, []);

  return (
    <>
      <StoryCard gradientClassName={styles.gradientClassName}>
        <div className={styles.root}>
          <Header>
            <Link href="/" className={styles.icon}>
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
