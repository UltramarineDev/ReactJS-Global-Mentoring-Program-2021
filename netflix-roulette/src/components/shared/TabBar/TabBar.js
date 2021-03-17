import PropTypes from 'prop-types';
import React from 'react';

import TabBarItem from './TabBarItem/TabBarItem';

const TabBar = ({ tabs, activeTabId, onTabChange }) => (
  <>
    {tabs.map(({ label, id }) => (
      <TabBarItem
        key={id}
        label={label}
        active={id === activeTabId}
        onClick={() => onTabChange(id)}
      />
    ))}
  </>
);

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabId: PropTypes.string.isRequired,
  onTabChange: PropTypes.func,
};

TabBar.defaultProps = {
  onTabChange: () => {},
};

export default TabBar;
