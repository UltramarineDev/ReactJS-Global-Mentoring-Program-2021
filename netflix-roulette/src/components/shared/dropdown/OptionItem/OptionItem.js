import React from 'react';
import PropTypes from 'prop-types';

import styles from './OptionItem.module.scss';

const OptionItem = ({ label, onClick }) => (
  <div className={styles.item}>
    <a onClick={onClick}>{label}</a>
  </div>
);

OptionItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionItem;
