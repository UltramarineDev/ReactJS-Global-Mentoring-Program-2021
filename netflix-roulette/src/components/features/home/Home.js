import React, { useState } from 'react';

import { buttonIcons, buttonTypes, buttonSizes } from 'components/shared/constants';
import StoryCard from 'components/shared/StoryCard/StoryCard';
import MoviesList from 'components/shared/MoviesList/MoviesList';
import Modal from 'components/shared/Modal/Modal';
import { wordings } from 'locales/wordings';
import Search from 'components/shared/Search/Search';
import Button from 'components/shared/Button/Button';
import Header from 'components/shared/Header/Header';

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
