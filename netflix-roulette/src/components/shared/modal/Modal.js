import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from '/src/components/shared/button/Button';
import { buttonTypes } from '/src/components/shared/constants';

import styles from './Modal.module.scss';

const Modal = ({ onClose, isOpen, children, confirmLabel, onConfirm, className }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <a className={styles.close} onClick={onClose}>&times;</a>
          {children}
          {confirmLabel &&
          <Button label={confirmLabel} type={buttonTypes.SEARCH} onClick={onConfirm} className={className}/>
        }
        </div>
      </div>
   ,document.body);
 };

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  className: PropTypes.string,
}

Modal.defaultProps = {
  children: undefined,
  confirmLabel: '',
  onConfirm: undefined,
  className: '',
}

export default Modal;
