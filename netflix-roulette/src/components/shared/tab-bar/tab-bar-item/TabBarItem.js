import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import styles from './TabBarItem.module.scss';

const TabBarItemComponent = ({ label, active, onClick }) => (
  <a 
    className={clsx(styles.tab, { [styles.activeTab]: active })} 
    onClick={onClick}>
    {label}
  </a>
);

TabBarItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabBarItemComponent;
