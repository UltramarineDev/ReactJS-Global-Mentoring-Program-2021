import PropTypes from 'prop-types';
import React from 'react';

import styles from './TabBarItem.module.scss';

const TabBarItemComponent = ({ label, active, onClick }) => (
  <>
  {active ? 
    <a className={styles.activeTab} onClick={onClick}>{label}</a> :
    <a className={styles.tab} onClick={onClick}>{label}</a>
  }
  </>
);

TabBarItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabBarItemComponent;
