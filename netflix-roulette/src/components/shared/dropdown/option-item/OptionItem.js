import React from 'react';
import PropTypes from 'prop-types';

import styles from './OptionItem.module.scss';

const OptionItemComponent = ({ label, onClick }) => (
  <>
    <div className={styles.item}>
      <a onClick={onClick}>{label}</a>
    </div>
  </>
);

OptionItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionItemComponent;
