import React from 'react';
import PropTypes from 'prop-types';

import styles from './OptionItem.module.scss';

const OptionItem = ({ label, onClick, value }) => {
  const onLinkClick = () => onClick(value);
  
  return (
    <a onClick={onLinkClick} className={styles.item}>{label}</a>
)};

OptionItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionItem;
