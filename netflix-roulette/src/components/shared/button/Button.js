import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BUTTON_TYPES } from '/src/components/shared/constants';
import styles from './Button.module.scss';
import { buttonIcon } from './constants';

const ButtonComponent = ({ label, type, onClick }) => (
  <>
    {type === BUTTON_TYPES.ADD &&
    <a className={styles.addButton} onClick={onClick}>
      <>
        <span>
          <FontAwesomeIcon icon={buttonIcon[type]} />
        </span>
        <span>{label}</span>
      </>
    </a>
    }
    {type === BUTTON_TYPES.SEARCH &&
    <a className={styles.searchButton} onClick={onClick}>
      <>
        <span>
          <FontAwesomeIcon icon={buttonIcon[type]} />
        </span>
        <span>{label}</span>
      </>
    </a>
    }
  </>
);

ButtonComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  label: 'Submit',
  type: BUTTON_TYPES.ADD,
  onClick: () => {},
};

export default ButtonComponent;
