import React from 'react';
import PropTypes from 'prop-types';

import Button from '/src/components/shared/button';
import { BUTTON_TYPES } from '/src/components/shared/constants';

import styles from './Modal.module.scss';

const ModalComponent = ({ onClose, isOpen, children, confirmLabel, onConfirm, className }) => (
  <>
    { isOpen && 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <a className={styles.close} onClick={onClose}>&times;</a>
          {children}
          {confirmLabel &&
          <Button label={confirmLabel} type={BUTTON_TYPES.SEARCH} onClick={onConfirm} className={className}/>
        }
        </div>
      </div>
    }
  </>
);

ModalComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  className: PropTypes.string,
}

ModalComponent.defaultProps = {
  children: undefined,
  confirmLabel: '',
  onConfirm: undefined,
  className: '',
}

export default ModalComponent;
