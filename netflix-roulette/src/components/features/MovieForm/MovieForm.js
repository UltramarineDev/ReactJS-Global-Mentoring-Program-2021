import React from 'react';
import PropTypes from 'prop-types';

import { wordings } from '/src/locales/wordings';
import styles from './MovieForm.module.scss';

const MovieForm = ({ title }) => (
  <form className={styles.form}>
    {title && <div className={styles.title}>{title}</div> }
    <p className={styles.label}>{wordings.title}</p>
    <input type="text" placeholder={wordings.movie_form_title_placeholder}></input>
    <p className={styles.label}>{wordings.release_date}</p>
    <input type="text" placeholder={wordings.movie_form_release_date_placeholder}></input>
    <p className={styles.label}>{wordings.movie_url}</p>
    <input type="text" placeholder={wordings.movie_form_movie_url_placeholder}></input>
    <p className={styles.label}>{wordings.genre}</p>
    <input type="text" placeholder={wordings.movie_form_genre_placeholder}></input>
    <p className={styles.label}>{wordings.overview}</p>
    <input type="text" placeholder={wordings.movie_form_overview_placeholder}></input>
    <p className={styles.label}>{wordings.runtime}</p>
    <input type="text" placeholder={wordings.movie_form_runtime_placeholder}></input>
  </form>
);

MovieForm.propTypes = {
  title: PropTypes.string,
};

MovieForm.defaultProps = {
  title: '',
};

export default MovieForm;
