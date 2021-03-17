import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OptionItem from './OptionItem/OptionItem';
import styles from './Dropdown.module.scss';

const Dropdown = ({ 
  value,
  options,
  onChange,
  onDropDownClick,
  showOptions,
  currentValueLabel,
  }) => (
  <>
    <div className={styles.dropdown}>
      <a onClick={onDropDownClick}>{currentValueLabel}</a>
      {showOptions ? 
        <div className={styles.icon}><FontAwesomeIcon icon="sort-up" /></div> :
        <div className={styles.icon}><FontAwesomeIcon icon="sort-down" /></div>
      }
      {showOptions &&
        <div className={styles.menu}>
          {options.map(({ id, name }) => 
            <OptionItem 
              key={id}
              value={id}
              label={name}
              onClick={()=> onChange(value)} />)}
        </div>
      }
    </div>
  </>
);

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
  onDropDownClick: PropTypes.func.isRequired,
  showOptions: PropTypes.bool.isRequired,
  currentValueLabel: PropTypes.string.isRequired
};

export default Dropdown;
