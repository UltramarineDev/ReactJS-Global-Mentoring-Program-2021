import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BUTTON_TYPES } from '/src/components/shared/constants';
import styles from './Button.module.scss';
import { buttonIcon } from './constants';

const ButtonComponent = ({ label, type, onClick, className }) => (
  <>
    {type === BUTTON_TYPES.ADD &&
    <a className={styles.addButton} onClick={onClick}>
      <div className={styles.background}></div>
      <div className={styles.labelAdd}>
        {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
        <span>{label}</span>
      </div>
    </a>
    }
    {type === BUTTON_TYPES.SEARCH &&
    <a className={classNames(styles.searchButton, className)} onClick={onClick}>
      <>
        {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
        <span className={styles.labelSearch}>{label}</span>
      </>
    </a>
    }
  </>
);

ButtonComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  label: 'Submit',
  type: BUTTON_TYPES.ADD,
  onClick: () => {},
};

export default ButtonComponent;
