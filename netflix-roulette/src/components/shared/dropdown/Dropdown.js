import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OptionItem from './OptionItem/OptionItem';
import styles from './Dropdown.module.scss';

const Dropdown = ({ 
  value,
  options,
  onChange,
  }) => {
  const currentValueLabel = options.find(({ id }) => id === value).name;
  const [showOptions, setShowOptions] = useState(false);

  const onChangeClick = useCallback((value) => {
    setShowOptions(showOptions => !showOptions);
    onChange(value);
  }, []);

  return (
    <div className={styles.dropdown}>
      <a onClick={() => setShowOptions(showOptions => !showOptions)}>{currentValueLabel}</a>
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
              onClick={onChangeClick} />)}
        </div>
      }
    </div>
)};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
