import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../../shared/button/Button';
import { buttonTypes, buttonSizes } from '../../shared/constants';

import styles from '../../../../styles/Modal.module.scss';

const Modal = ({
  onClose,
  isOpen,
  children,
  confirmLabel,
  onConfirm,
  resetLabel,
  moviesListRef,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    // <div className={styles.modal} ref={moviesListRef}>
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <a className={styles.close} onClick={onClose}>&times;</a>
        {children}
        <div className={styles.buttonWrapper}>
          {resetLabel
              && (
              <div className={styles.button}>
                <Button
                  label={resetLabel}
                  type={buttonTypes.SECONDARY}
                  onClick={onClose}
                  size={buttonSizes.SMALL}
                />
              </div>
              )}
          {confirmLabel
              && (
              <Button
                label={confirmLabel}
                type={buttonTypes.SECONDARY}
                onClick={onConfirm}
                size={buttonSizes.SMALL}
              />
              )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  resetLabel: PropTypes.string,
};

Modal.defaultProps = {
  children: undefined,
  confirmLabel: '',
  onConfirm: undefined,
  resetLabel: '',
};

export default Modal;
