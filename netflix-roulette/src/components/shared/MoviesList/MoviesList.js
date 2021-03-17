import React, { useState, useEffect  } from 'react';

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
  const moviesCount = filteredMovies ? filteredMovies.length : 0;

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs.ALL);
  const [sortOptionId, setSortOptionId] = useState(sortOptions.RELEASE_DATE);
  const [action, setAction] = useState('');

  useEffect(() => {
    setMovies(data);
    setFilteredMovies(data);
  });

  const handleTabChange = (activeTab) => {
    setFilteredMovies(getFilteredMovies(movies, activeTab));
    setActiveTab(activeTab);
  }
  
  const handleSortOptionChange = (value) => {
    setFilteredMovies(getSortedMovies(filteredMovies, value));
    setSortOptionId(value);
  };

  return (
  <>
    <div className={styles.movieListSection}>
      <NavBar
        tabs={getTabs()}
        activeTab={activeTab}
        onTabChange={() => handleTabChange(activeTab)}
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
              onActionClick={(id) => setAction(id)}
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
