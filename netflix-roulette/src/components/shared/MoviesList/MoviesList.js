import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { wordings } from 'locales/wordings';
import Modal from 'components/shared/Modal/Modal';
import NavBar from 'components/shared/NavBar/NavBar';
import { getMoviesAction } from 'components/actions';
import Loader from 'components/shared/Loader/Loader';

import MovieCard from '../MovieCard/MovieCard';
import EditMovieForm from '../../features/EditMovie/EditMovie';
import DeleteMovieForm from '../../features/DeleteMovieForm/DeleteMovieForm';
import { getTabs, getOptions, useOutsideClick } from './utils';
import { tabs, sortOptions, movieActions, sortOptionsLabels, movieActionLabels } from './constants';
import styles from './MoviesList.module.scss';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);
  const isLoading = useSelector(((state) => state.isMoviesLoading));
  const error = useSelector(((state) => state.error));
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(tabs.ALL);
  const [sortOptionId, setSortOptionId] = useState(sortOptions.RELEASE_DATE);
  const [action, setAction] = useState({});

  // const moviesListRef = useRef(null);
  // useOutsideClick(moviesListRef, setAction);

  useEffect(() => {
    dispatch(getMoviesAction());
    if (error) {
      console.log(error);
    }
  }, []);

  const handleTabChange = (activeTab) => {
    activeTab === tabs.ALL ? dispatch(getMoviesAction(null, sortOptionId)) : dispatch(getMoviesAction(activeTab, sortOptionId));
    setActiveTab(activeTab);
  };

  const handleSortOptionChange = (value) => {
    activeTab === tabs.ALL ? dispatch(getMoviesAction(null, value)) : dispatch(getMoviesAction(activeTab, value));
    setSortOptionId(value);
  };

  const handleMovieDeleted = () => {
    setAction({});
  };

  const onActionClick = (id, actionData) => {
    setAction({ id, actionData });
  };

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
                {movies.length}
                {' '}
              </strong>
              {wordings.movies_found}
            </div>
            { movies && (
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
        confirmLabel={wordings.save}
        resetLabel={wordings.reset}
        onConfirm={setAction}
        className={styles.submitButton}
        moviesListRef={moviesListRef}
      >
        <EditMovieForm />
      </Modal>
      <Modal
        onClose={setAction}
        isOpen={action.id === movieActions.delete}
      >
        <DeleteMovieForm movieId={action.actionData} onDelete={handleMovieDeleted} />
      </Modal>
    </div>
  );
};

export default MoviesList;
