import React from 'react';
import PropTypes from 'prop-types';

import { URL } from '/src/components/constants';
import { wordings } from '/src/locales/wordings';
import { buttonTypes, buttonSizes } from '/src/components/shared/constants';
import Button from '/src/components/shared/button/Button';

import styles from './DeleteMovie.module.scss';

const DeleteMovieForm = ({ movieId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`${URL}/${movieId}`, { method: 'DELETE' });  
      console.log(response);
      if (onDelete) {
        onDelete();
      }
    } catch(error) {
      //
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
          size={buttonSizes.SMALL} />
      </div>
    </>
)};

DeleteMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

DeleteMovieForm.defaultProps = {
  onDelete: undefined,
};

export default DeleteMovieForm;
