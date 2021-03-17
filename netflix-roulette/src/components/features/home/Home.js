import React from 'react';
import PropTypes from 'prop-types';

import Header from '/src/components/shared/Header/Header';
import NavBar from '/src/components/shared/NavBar/NavBar'
import MovieList from '/src/components/shared/MoviesList/MoviesList';
import Modal from '/src/components/shared/Modal/Modal';
import { wordings } from '/src/locales/wordings';
import AddMovieForm from '../AddMovie/AddMovie';
import EditMovieForm from '../EditMovie/EditMovie';
import DeleteMovieForm from '../DeleteMovieForm/DeleteMovieForm';

import styles from './Home.module.scss';

const Home = ({ 
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
  onDeleteMovie,
  onSubmitMovie,
  onSaveEditedMovie,
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
      <div className={styles.moviesCount}><strong>{moviesCount} </strong>{wordings.movies_found}</div>
      {filteredMovies &&  
        <div className={styles.movieList}>
          <MovieList movies={filteredMovies} onActionClick={onActionClick} actions={actions}/>
        </div>
      }
    </div>

    <Modal 
      onClose={onCloseAddMovie} 
      isOpen={isAddMovieModalOpened}
      confirmLabel={wordings.submit}
      onConfirm={onSubmitMovie}
      className={styles.submitButton}
      >
      <AddMovieForm />
    </Modal>
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

Home.propTypes = {
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
  onDeleteMovie: PropTypes.func.isRequired,
  onSubmitMovie: PropTypes.func.isRequired,
  onSaveEditedMovie: PropTypes.func.isRequired,
};

Home.defaultProps = {
  action: '',
}

export default Home;
