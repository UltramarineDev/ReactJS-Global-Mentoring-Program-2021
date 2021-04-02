import React from 'react';
import PropTypes from 'prop-types';

import { URL } from 'components/constants';
import { wordings } from 'locales/wordings';
import { buttonTypes, buttonSizes } from 'components/shared/constants';
import Button from 'components/shared/button/Button';

import styles from './DeleteMovie.module.scss';

const DeleteMovieForm = ({ movieId, onDelete }) => {
  const handleDelete = async () => {
    const response = await fetch(`${URL}/${movieId}`, { method: 'DELETE' });
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <>
      <p className={styles.header}>{wordings.delete_movie}</p>
      <p className={styles.content}>{wordings.delete_movie_content}</p>
      <div className={styles.button}>
        <Button
          label={wordings.confirm}
          type={buttonTypes.SEARCH}
          onClick={handleDelete}
          size={buttonSizes.SMALL}
        />
      </div>
    </>
  );
};

DeleteMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

DeleteMovieForm.defaultProps = {
  onDelete: undefined,
};

export default DeleteMovieForm;
