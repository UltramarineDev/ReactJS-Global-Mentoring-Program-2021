import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const ModalComponent = ({ onClose, isOpen, children }) => (
  <>
    { isOpen && 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <a className={styles.close} onClick={onClose}>&times;</a>
          {children}
        </div>
      </div>
    }
  </>
);

ModalComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

ModalComponent.defaultProps = {
  children: undefined
}

export default ModalComponent;
