import React from 'react';
import PropTypes from 'prop-types';

import { buttonIcons, buttonTypes } from '/src/components/shared/constants';
import StoryCard from '/src/components/shared/StoryCard/StoryCard';
import MoviesList from '/src/components/shared/MoviesList/MoviesListContainer';
import Modal from '/src/components/shared/Modal/Modal';
import { wordings } from '/src/locales/wordings';
import Search from '/src/components/shared/Search/Search';
import Button from '/src/components/shared/Button/Button'
import Header from '/src/components/shared/Header/Header';
import AddMovieForm from '../AddMovie/AddMovie';

import styles from './Home.module.scss';

const Home = ({ 
  onAddMovie,
  isAddMovieModalOpened,
  onCloseAddMovie,
  onSubmitMovie,
  }) => (
  <>
    <StoryCard>
      <div className={styles.searchSection}>
         <Header>
           <Button 
           type={buttonTypes.ADD} 
           iconType={buttonIcons.ADD}
           label={wordings.add_movie}
           onClick={onAddMovie} />
         </Header>
       <div className={styles.searchDescription}>{wordings.find_your_movie}</div>
       <Search />
   </div>
    </StoryCard>
    <MoviesList />

    <Modal 
      onClose={onCloseAddMovie} 
      isOpen={isAddMovieModalOpened}
      confirmLabel={wordings.submit}
      onConfirm={onSubmitMovie}
      className={styles.submitButton}
      >
      <AddMovieForm />
    </Modal>
  </>
);

Home.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
  isAddMovieModalOpened: PropTypes.bool.isRequired,
  onCloseAddMovie: PropTypes.func.isRequired,
  onSubmitMovie: PropTypes.func.isRequired,
};

export default Home;
