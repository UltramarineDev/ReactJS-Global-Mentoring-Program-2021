import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { wordings } from '../../../locales/wordings';
import { buttonTypes, buttonSizes } from '../../shared/constants';
import Button from '../../shared/button/Button';
import { deleteMovieAction } from '../../../actions';

import styles from '../../../../styles/DeleteMovie.module.scss';

const DeleteMovieForm = ({ movieId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovieAction(movieId));
  };

  return (
    <>
      <p className={styles.header}>{wordings.delete_movie}</p>
      <p className={styles.content}>{wordings.delete_movie_content}</p>
      <div className={styles.button}>
        <Button
          label={wordings.confirm}
          type={buttonTypes.PRIMARY}
          onClick={handleDelete}
          size={buttonSizes.SMALL}
        />
      </div>
    </>
  );
};

DeleteMovieForm.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DeleteMovieForm;
