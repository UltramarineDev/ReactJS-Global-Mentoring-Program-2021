import React from 'react';
import PropTypes from 'prop-types';

import TabBar from '/src/components/shared/tab-bar';
import Dropdown from '/src/components/shared/Dropdown';
import styles from './NavBar.module.scss';

const NavBarComponent = ({ 
  tabs,
  activeTab,
  onTabChange,
  sortOptions,
  onSortOptionChange,
  sortOptionId,
  }) => (
  <div className={styles.navBar}>
    <div className={styles.resultsFilter}>
      <TabBar
        tabs={tabs}
        activeTabId={activeTab}
        onTabChange={onTabChange}
      />
    </div>
    <div className={styles.resultsSort}>
      <span>SORT BY</span>
      <Dropdown
        options={sortOptions}
        value={sortOptionId}
        onChange={onSortOptionChange} />
    </div>
  </div>
);

NavBarComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptionId: PropTypes.string.isRequired,
};

export default NavBarComponent;

