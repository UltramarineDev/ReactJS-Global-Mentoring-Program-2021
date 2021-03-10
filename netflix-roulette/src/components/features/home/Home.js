import React from 'react';
import PropTypes from 'prop-types';

import Header from '/src/components/shared/header';
import NavBar from '/src/components/shared/navBar'
import MovieList from '/src/components/shared/movies-list/MoviesList';
import Modal from '/src/components/shared/modal';

import AddMovieForm from '../movie-form';
import EditMovieForm from '../movie-form';
import DeleteMovieForm from '../delete-movie-form';

import styles from './Home.module.scss';

const HomeComponent = ({ 
  filteredMovies,
  moviesCount,
  tabs,
  activeTab,
  onTabChange,
  sortOptions,
  onSortOptionChange,
  sortOptionId,
  onAddMovie,
  isAddMovieModalOpened,
  onCloseAddMovie,
  onActionClick,
  actions,
  onActionCancel,
  isEditOpen,
  isDeleteOpen,
  }) => (
  <>
    <Header onAddMovie={onAddMovie} />
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
      <div className={styles.moviesCount}><strong>{moviesCount}</strong> movies found</div>
      {filteredMovies &&  
        <div className={styles.movieList}>
          <MovieList movies={filteredMovies} onActionClick={onActionClick} actions={actions}/>
        </div>
      }
    </div>

    <Modal onClose={onCloseAddMovie} isOpen={isAddMovieModalOpened}>
      <AddMovieForm />
    </Modal>
    <Modal onClose={onActionCancel} isOpen={isEditOpen}>
      <EditMovieForm />
    </Modal>
    <Modal onClose={onActionCancel} isOpen={isDeleteOpen}>
      <DeleteMovieForm />
    </Modal>
  </>
);

HomeComponent.propTypes = {
  filteredMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moviesCount: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptionId: PropTypes.string.isRequired,
  onAddMovie: PropTypes.func.isRequired,
  isAddMovieModalOpened: PropTypes.bool.isRequired,
  onCloseAddMovie: PropTypes.func.isRequired,
  onActionClick: PropTypes.func.isRequired,
  action: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onActionCancel: PropTypes.func.isRequired,
  isEditOpen: PropTypes.bool.isRequired,
  isDeleteOpen: PropTypes.bool.isRequired,
};

HomeComponent.defaultProps = {
  action: '',
}

export default HomeComponent;
