import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { wordings } from '/src/locales/wordings';
import Modal from '/src/components/shared/Modal/Modal';
import NavBar from '/src/components/shared/NavBar/NavBar'
import MovieCard from '../MovieCard/MovieCardContainer';
import EditMovieForm from '../../features/EditMovie/EditMovie';
import DeleteMovieForm from '../../features/DeleteMovieForm/DeleteMovieForm';

import styles from './MoviesList.module.scss';

const MoviesList = ({
  filteredMovies, 
  moviesCount,
  tabs,
  activeTab,
  onTabChange,
  sortOptions,
  onSortOptionChange,
  sortOptionId,
  onActionClick,
  actions,
  onActionCancel,
  isEditOpen,
  isDeleteOpen,
  onDeleteMovie,
  onSaveEditedMovie,
}) => (
  <>
    <div className={styles.movieListSection}>
      <NavBar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        sortOptions={sortOptions}
        sortOptionId={sortOptionId}
        onSortOptionChange={onSortOptionChange}
      />
      <div className={styles.border}></div>
      <div className={styles.moviesCount}><strong>{moviesCount} </strong>{wordings.movies_found}</div>
      {filteredMovies &&  
        <div className={styles.moviesList}>
          {filteredMovies.map((movie) => (
            <MovieCard
              key={uniqueId()}
              movie={movie}
              onActionClick={onActionClick}
              actions={actions}
          />))}
        </div>
        }
    </div>
    <Modal
      onClose={onActionCancel}
      isOpen={isEditOpen}
      confirmLabel={wordings.save}
      onConfirm={onSaveEditedMovie}
      className={styles.submitButton}
      >
        <EditMovieForm />
    </Modal>
    <Modal 
      onClose={onActionCancel}
      isOpen={isDeleteOpen}
      confirmLabel={wordings.confirm}
      onConfirm={onDeleteMovie}
      className={styles.confirmButton}>
        <DeleteMovieForm />
    </Modal>
  </>
);

MoviesList.propTypes = {
  onActionClick: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moviesCount: PropTypes.number.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptionId: PropTypes.string.isRequired,
  onActionClick: PropTypes.func.isRequired,
  action: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onActionCancel: PropTypes.func.isRequired,
  isEditOpen: PropTypes.bool.isRequired,
  isDeleteOpen: PropTypes.bool.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  onSaveEditedMovie: PropTypes.func.isRequired,
};

export default MoviesList;
