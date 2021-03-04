import PropTypes from 'prop-types';
import React from 'react';

import TabBarItem from './tab-bar-item';

const TabBarComponent = ({ tabs, activeTabId, onTabChange }) => (
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

TabBarComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabId: PropTypes.string.isRequired,
  onTabChange: PropTypes.func,
};

TabBarComponent.defaultProps = {
  onTabChange: () => {},
};

export default TabBarComponent;
