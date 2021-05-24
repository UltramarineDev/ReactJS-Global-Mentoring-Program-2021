import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { wordings } from 'locales/wordings';
import Modal from 'components/shared/Modal/Modal';
import NavBar from 'components/shared/NavBar/NavBar';
import { getMoviesAction } from 'actions';
import Loader from 'components/shared/Loader/Loader';

import MovieCard from '../MovieCard/MovieCard';
import EditMovieForm from '../../features/EditMovie/EditMovie';
import DeleteMovieForm from '../../features/DeleteMovieForm/DeleteMovieForm';
import { getTabs, getOptions, useOutsideClick } from './utils';
import { tabs, sortOptions, movieActions, sortOptionsLabels, movieActionLabels } from './constants';
import styles from './MoviesList.module.scss';

const MoviesList = () => {
  const { fetchMovies, searchBy, deleteMovie } = useSelector((state) => state);
  const { movies, isMoviesLoading: isLoading } = fetchMovies;
  const { search } = searchBy;
  const { isMovieDeleted } = deleteMovie;

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(tabs.ALL);
  const [sortOptionId, setSortOptionId] = useState(sortOptions.RELEASE_DATE);
  const [action, setAction] = useState({});

  // const moviesListRef = useRef(null);
  // useOutsideClick(moviesListRef, setAction);

  useEffect(() => {
    dispatch(getMoviesAction(activeTab, sortOptionId, search));
  }, [activeTab, sortOptionId, search, isMovieDeleted]);

  const handleTabChange = (activeTab) => setActiveTab(activeTab);

  const handleSortOptionChange = (value) => setSortOptionId(value);

  const handleActionCompleted = () => setAction({});

  const onActionClick = (id, actionData) => setAction({ id, actionData });

  return (
    <div className={styles.movieListSection}>
      {isLoading ? <Loader />
        : (
          <>
            <NavBar
              tabs={getTabs()}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              sortOptions={getOptions(sortOptions, sortOptionsLabels)}
              sortOptionId={sortOptionId}
              onSortOptionChange={handleSortOptionChange}
            />
            <div className={styles.border} />
            <div className={styles.moviesCount}>
              <strong>
                {movies ? movies.length : 0}
                {' '}
              </strong>
              {wordings.movies_found}
            </div>
            { movies && movies.length > 0 && (
            <div className={styles.moviesList}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.title}
                  movie={movie}
                  onActionClick={onActionClick}
                  actions={getOptions(movieActions, movieActionLabels)}
                />
              ))}
            </div>
            )}
          </>
        )}
      <Modal
        onClose={setAction}
        isOpen={action.id === movieActions.edit}
        resetLabel={wordings.reset}
        className={styles.submitButton}
        // moviesListRef={moviesListRef}
      >
        <EditMovieForm movieId={action.actionData} onSave={handleActionCompleted} />
      </Modal>
      <Modal
        onClose={setAction}
        isOpen={action.id === movieActions.delete}
      >
        <DeleteMovieForm movieId={action.actionData} onDelete={handleActionCompleted} onSave={setAction} />
      </Modal>
    </div>
  );
};

export default MoviesList;
