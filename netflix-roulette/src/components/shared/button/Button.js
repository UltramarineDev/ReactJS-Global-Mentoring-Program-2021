import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { buttonTypes, buttonSizes } from '/src/components/shared/constants';
import styles from './Button.module.scss';
import { buttonIcon } from './constants';
import { getButtonSizeStyle } from './utils';

const Button = ({ label, type, onClick, size }) => {
  let sizeClassName = getButtonSizeStyle(size, styles);

  return (
  <>
    {type === buttonTypes.ADD &&
      <a className={classNames(styles.addButton, sizeClassName)} onClick={onClick}>
        <div className={styles.background}></div>
        <div className={styles.labelAdd}>
          {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
          <span>{label}</span>
        </div>
      </a>
    }
    {type === buttonTypes.CANCEL &&
      <a className={classNames(styles.cancelButton, sizeClassName)} onClick={onClick}>
        <>
          {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
          <span className={styles.labelSearch}>{label}</span>
        </>
      </a>
    }
    {type === buttonTypes.SEARCH &&
      <a className={classNames(styles.searchButton, sizeClassName)} onClick={onClick}>
        <>
          {buttonIcon[type] && <span className={styles.icon}><FontAwesomeIcon icon={buttonIcon[type]} /></span>}
          <span className={styles.labelSearch}>{label}</span>
        </>
      </a>
    }
  </>
)};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

Button.defaultProps = {
  label: 'Submit',
  type: buttonTypes.ADD,
  onClick: () => {},
  size: buttonSizes.MEDIUM,
};

export default Button;
