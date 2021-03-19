import React from 'react';

import { wordings } from '/src/locales/wordings';

import styles from './DeleteMovie.module.scss';

const DeleteMovieForm = () => (
  <>
    <p className={styles.header}>{wordings.delete_movie}</p>
    <p className={styles.content}>{wordings.delete_movie_content}</p>
  </>
);

export default DeleteMovieForm;
