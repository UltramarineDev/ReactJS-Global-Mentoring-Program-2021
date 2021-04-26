import React from 'react';
import PropTypes from 'prop-types';

import { wordings } from 'locales/wordings';
import TabBar from 'components/shared/TabBar/TabBar';
import Dropdown from 'components/shared/dropdown/Dropdown';

import styles from './NavBar.module.scss';

const NavBar = ({
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
      <span>{wordings.sort_by}</span>
      <Dropdown
        options={sortOptions}
        value={sortOptionId}
        onChange={onSortOptionChange}
      />
    </div>
  </div>
);

NavBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptionId: PropTypes.string.isRequired,
};

export default NavBar;
