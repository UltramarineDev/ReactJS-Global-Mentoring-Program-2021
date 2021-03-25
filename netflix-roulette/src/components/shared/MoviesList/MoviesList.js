import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { wordings } from '/src/locales/wordings';
import Modal from '/src/components/shared/Modal/Modal';
import NavBar from '/src/components/shared/NavBar/NavBar'
import MovieCard from '../MovieCard/MovieCard';
import EditMovieForm from '../../features/EditMovie/EditMovie';
import DeleteMovieForm from '../../features/DeleteMovieForm/DeleteMovieForm';
import { getMoviesAction, filterMoviesAction } from '/src/components/actions';
import { getTabs, getOptions } from './utils';
import { tabs, sortOptions, movieActions, sortOptionsLabels, movieActionLabels } from './constants';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, getMovies, getFilteredMovies }) => {
  const [activeTab, setActiveTab] = useState(tabs.ALL);
  const [sortOptionId, setSortOptionId] = useState(sortOptions.RELEASE_DATE);
  const [action, setAction] = useState('');

  useEffect(() => {
    getMovies();
  }, [])

  const handleTabChange = (activeTab) => {
    activeTab === tabs.ALL ? getFilteredMovies(null, sortOptionId) : getFilteredMovies(activeTab, sortOptionId);
    setActiveTab(activeTab);
  };

  const handleSortOptionChange = (value) => {
    activeTab === tabs.ALL ? getFilteredMovies(null, value) : getFilteredMovies(activeTab, value);
    setSortOptionId(value);
  };

  const onActionClick = (id) => {
    setAction(id);
  };

  return (
    <>
      <div className={styles.movieListSection}>
        <NavBar
          tabs={getTabs()}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          sortOptions={getOptions(sortOptions, sortOptionsLabels)}
          sortOptionId={sortOptionId}
          onSortOptionChange={handleSortOptionChange}
        />
        <div className={styles.border}></div>
        <div className={styles.moviesCount}><strong>{movies.length} </strong>{wordings.movies_found}</div>
        {movies &&  
          <div className={styles.moviesList}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                onActionClick={onActionClick}
                actions={getOptions(movieActions, movieActionLabels)}
            />))}
          </div>
          }
      </div>
      <Modal
        onClose={setAction}
        isOpen={action === movieActions.edit}
        confirmLabel={wordings.save}
        resetLabel={wordings.reset}
        onConfirm={setAction}
        className={styles.submitButton}
        >
          <EditMovieForm />
      </Modal>
      <Modal
        onClose={setAction}
        isOpen={action === movieActions.delete}
        confirmLabel={wordings.confirm}
        onConfirm={setAction}
        className={styles.confirmButton}>
          <DeleteMovieForm />
      </Modal>
    </>
)};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMovies: PropTypes.func.isRequired,
  getFilteredMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMoviesAction()),
  getFilteredMovies: (filter, sortBy) => dispatch(filterMoviesAction(filter, sortBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
