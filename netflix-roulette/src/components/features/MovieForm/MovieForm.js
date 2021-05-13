import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { wordings } from 'locales/wordings';
import Dropdown from 'components/shared/dropdown/Dropdown';
import Button from 'components/shared/button/Button';
import { buttonTypes, buttonSizes } from 'components/shared/constants';

import { validate } from './validate';
import { getGenres } from './utils';
import styles from './MovieForm.module.scss';

const MovieForm = ({ title, onSave, initialValues }) => {
  const genres = getGenres();
  const [genreId, setGenreId] = useState('');

  const formik = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
    onSubmit: (values) => onSave(values),
  });

  const handleGenreChange = (value) => {
    setGenreId(value);
    formik.setFieldValue('genre', value);
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {title && <div className={styles.title}>{title}</div> }
      <p className={styles.label}>{wordings.title}</p>
      <input
        id="title"
        name="title"
        type="text"
        placeholder={wordings.movie_form_title_placeholder}
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <p className={styles.label}>{wordings.release_date}</p>
      <input
        id="releaseDate"
        type="date"
        placeholder={wordings.movie_form_release_date_placeholder}
        value={formik.values.releaseDate}
        onChange={formik.handleChange}
      />
      {formik.errors.releaseDate ? <div>{formik.errors.releaseDate}</div> : null}

      <p className={styles.label}>{wordings.movie_url}</p>
      <input
        id="movieUrl"
        type="text"
        placeholder={wordings.movie_form_movie_url_placeholder}
        value={formik.values.movieUrl}
        onChange={formik.handleChange}
      />
      {formik.errors.movieUrl ? <div>{formik.errors.movieUrl}</div> : null}

      <p className={styles.label}>{wordings.genre}</p>
      <div className={styles.dropdown}>
        <Dropdown
          id="genre"
          options={genres}
          placeholder={wordings.movie_form_genre_placeholder}
          value={genreId || formik.values.genre}
          onChange={handleGenreChange}
        />
      </div>

      <p className={styles.label}>{wordings.overview}</p>
      <input
        id="overview"
        type="text"
        placeholder={wordings.movie_form_overview_placeholder}
        value={formik.values.overview}
        onChange={formik.handleChange}
      />
      {formik.errors.overview ? <div>{formik.errors.overview}</div> : null}

      <p className={styles.label}>{wordings.runtime}</p>
      <input
        id="runtime"
        type="text"
        placeholder={wordings.movie_form_runtime_placeholder}
        value={formik.values.runtime}
        onChange={formik.handleChange}
      />
      <Button
        label={wordings.save}
        type={buttonTypes.PRIMARY}
        size={buttonSizes.SMALL}
      />
    </form>
  );
};

MovieForm.propTypes = {
  title: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

MovieForm.defaultProps = {
  title: '',
};

export default MovieForm;
