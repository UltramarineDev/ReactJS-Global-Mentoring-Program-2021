/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { buttonTypes, buttonSizes } from 'components/shared/constants';

import styles from './Button.module.scss';
import { getButtonSizeStyle } from './utils';

const Button = ({ label, type, onClick, size }) => {
  const sizeClassName = getButtonSizeStyle(size, styles);

  return (
    <>
      {type === buttonTypes.PRIMARY && (
      <a className={classNames(styles.primary, sizeClassName)} onClick={onClick}>
        <span className={styles.label}>{label}</span>
      </a>
      )}
      {type === buttonTypes.PRIMARY_WITH_ICON && (
      <a className={classNames(styles.primaryWithIcon, sizeClassName)} onClick={onClick}>
        <>
          <span className={styles.icon}><FontAwesomeIcon icon="plus" /></span>
          <span className={styles.labelWithIcon}>{label}</span>
        </>
      </a>
      )}
      {type === buttonTypes.SECONDARY
      && (
      <a className={classNames(styles.secondary, sizeClassName)} onClick={onClick}>
        <span className={styles.label}>{label}</span>
      </a>
      )}
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

Button.defaultProps = {
  label: 'Submit',
  type: buttonTypes.PRIMARY,
  onClick: () => {},
  size: buttonSizes.MEDIUM,
};

export default Button;
