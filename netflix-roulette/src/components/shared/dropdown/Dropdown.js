import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import OptionItem from './OptionItem/OptionItem';
import styles from './Dropdown.module.scss';

const Dropdown = ({
  value,
  options,
  onChange,
  placeholder,
  className,
}) => {
  const currentValueLabel = value ? options.find(({ id }) => id === value).name : placeholder;
  const [showOptions, setShowOptions] = useState(false);

  const onChangeClick = useCallback((value) => {
    setShowOptions((showOptions) => !showOptions);
    onChange(value);
  }, []);

  return (
    <div className={styles.dropdown}>
      <a onClick={() => setShowOptions((showOptions) => !showOptions)}>{currentValueLabel}</a>
      {showOptions
        ? <div className={styles.icon}><FontAwesomeIcon icon="sort-up" /></div>
        : <div className={styles.icon}><FontAwesomeIcon icon="sort-down" /></div>}
      {showOptions
        && (
        <div className={classnames(styles.menu, className)}>
          {options.map(({ id, name }) => (
            <OptionItem
              key={id}
              value={id}
              label={name}
              onClick={onChangeClick}
            />
          ))}
        </div>
        )}
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  placeholder: '',
  className: '',
};

export default Dropdown;
