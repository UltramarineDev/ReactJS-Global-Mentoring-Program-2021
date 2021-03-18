import React, { useState, useEffect, useCallback } from 'react';

import { wordings } from '/src/locales/wordings';
import Modal from '/src/components/shared/Modal/Modal';
import NavBar from '/src/components/shared/NavBar/NavBar'
import MovieCard from '../MovieCard/MovieCard';
import EditMovieForm from '../../features/EditMovie/EditMovie';
import DeleteMovieForm from '../../features/DeleteMovieForm/DeleteMovieForm';
import { data } from './data.json';
import { getTabs, getFilteredMovies, getSortedMovies, getOptions } from './utils';
import { tabs, sortOptions, movieActions, sortOptionsLabels, movieActionLabels } from './constants';
import styles from './MoviesList.module.scss';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs.ALL);
  const [sortOptionId, setSortOptionId] = useState(sortOptions.RELEASE_DATE);
  const [action, setAction] = useState('');
  const [moviesCount, setMoviesCount] = useState(0);

  useEffect(() => {
    setMovies(data);
    setFilteredMovies(data);
    setMoviesCount(data.length);
  }, filteredMovies);

  const handleTabChange = (activeTab) => {
    const filteredMovies = getFilteredMovies(movies, activeTab);
    setFilteredMovies(filteredMovies);
    setMoviesCount(filteredMovies.length);
    setActiveTab(activeTab);
  };

  const handleSortOptionChange = (value) => {
    setFilteredMovies(getSortedMovies(filteredMovies, value));
    setSortOptionId(value);
  };

  const onActionClick = useCallback((id) => {
    setAction(id);
  }, []);

  return (
    <>
      <div className={styles.movieListSection}>
        <NavBar
          tabs={getTabs()}
          activeTab={activeTab}
          onTabChange={(id) => handleTabChange(id)}
          sortOptions={getOptions(sortOptions, sortOptionsLabels)}
          sortOptionId={sortOptionId}
          onSortOptionChange={(value) => handleSortOptionChange(value)}
        />
        <div className={styles.border}></div>
        <div className={styles.moviesCount}><strong>{moviesCount} </strong>{wordings.movies_found}</div>
        {filteredMovies &&  
          <div className={styles.moviesList}>
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                onActionClick={(id) => onActionClick(id)}
                actions={getOptions(movieActions, movieActionLabels)}
            />))}
          </div>
          }
      </div>
      <Modal
        onClose={() => setAction('')}
        isOpen={action === movieActions.edit}
        confirmLabel={wordings.save}
        onConfirm={() => setAction('')}
        className={styles.submitButton}
        >
          <EditMovieForm />
      </Modal>
      <Modal 
        onClose={() => setAction('')}
        isOpen={action === movieActions.delete}
        confirmLabel={wordings.confirm}
        onConfirm={() => setAction('')}
        className={styles.confirmButton}>
          <DeleteMovieForm />
      </Modal>
    </>
)};

export default MoviesList;
