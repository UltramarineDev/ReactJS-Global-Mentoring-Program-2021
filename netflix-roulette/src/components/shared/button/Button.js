import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buttonTypes } from '/src/components/shared/constants';
import styles from './Button.module.scss';
import { buttonIcon } from './constants';

const Button = ({ label, type, onClick, className }) => (
  <>
    {type === buttonTypes.ADD &&
    <a className={styles.addButton} onClick={onClick}>
      <div className={styles.background}></div>
      <div className={styles.labelAdd}>
        {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
        <span>{label}</span>
      </div>
    </a>
    }
    {type === buttonTypes.SEARCH &&
    <a className={classNames(styles.searchButton, className)} onClick={onClick}>
      <>
        {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
        <span className={styles.labelSearch}>{label}</span>
      </>
    </a>
    }
  </>
);

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Submit',
  type: buttonTypes.ADD,
  onClick: () => {},
};

export default Button;
