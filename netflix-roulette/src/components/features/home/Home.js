import React, { useState } from 'react';

import { buttonIcons, buttonTypes, emptyFunc } from '/src/components/shared/constants';
import StoryCard from '/src/components/shared/StoryCard/StoryCard';
import MoviesList from '/src/components/shared/MoviesList/MoviesList';
import Modal from '/src/components/shared/Modal/Modal';
import { wordings } from '/src/locales/wordings';
import Search from '/src/components/shared/Search/Search';
import Button from '/src/components/shared/Button/Button'
import Header from '/src/components/shared/Header/Header';
import AddMovieForm from '../AddMovie/AddMovie';

import styles from './Home.module.scss';

const Home = () => {
    const [isModalOpened, setModalOpened] = useState(false);
    return (
  <>
    <StoryCard>
      <div className={styles.searchSection}>
         <Header>
           <Button
           type={buttonTypes.ADD} 
           iconType={buttonIcons.ADD}
           label={wordings.add_movie}
           onClick={() => setModalOpened(true)} />
         </Header>
       <div className={styles.searchDescription}>{wordings.find_your_movie}</div>
       <Search />
   </div>
    </StoryCard>
    <MoviesList />

    <Modal 
      onClose={() => setModalOpened(false)}
      isOpen={isModalOpened}
      confirmLabel={wordings.submit}
      onConfirm={emptyFunc}
      className={styles.submitButton}
      >
        <AddMovieForm />
    </Modal>
  </>
)};

export default Home;
