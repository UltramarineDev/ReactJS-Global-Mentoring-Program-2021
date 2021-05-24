import React, { useState } from 'react';

import { wordings } from '../../../locales/wordings';
import StoryCard from '../../shared/StoryCard/StoryCard';
import MoviesList from '../../shared/MoviesList/MoviesList';
import Modal from '../../shared/Modal/Modal';
import Search from '../../shared/Search/Search';
import Button from '../../shared/Button/Button';
import Header from '../../shared/Header/Header';
import { buttonIcons, buttonTypes, buttonSizes } from '../../shared/constants';
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
              onClick={() => setModalOpened(true)}
              size={buttonSizes.MEDIUM}
            />
          </Header>
          <div className={styles.searchDescription}>{wordings.find_your_movie}</div>
          <Search />
        </div>
      </StoryCard>
      <MoviesList />

      <Modal
        onClose={() => setModalOpened(false)}
        isOpen={isModalOpened}
        resetLabel={wordings.reset}
        className={styles.submitButton}
      >
        <AddMovieForm onSave={() => setModalOpened(false)} />
      </Modal>
    </>
  );
};

export default Home;
