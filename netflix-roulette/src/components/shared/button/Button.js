import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BUTTON_TYPES } from '/src/components/shared/constants';
import styles from './Button.module.scss';
import { buttonIcon } from './constants';

const ButtonComponent = ({ label, type }) => (
  <>
    {type === BUTTON_TYPES.ADD &&
    <a className={styles.addButton} href="#">
      <>
        <span>
          <FontAwesomeIcon icon={buttonIcon[type]} />
        </span>
        <span>{label}</span>
      </>
    </a>
    }
    {type === BUTTON_TYPES.SEARCH &&
    <a className={styles.searchButton} href="#">
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
};

ButtonComponent.defaultProps = {
  label: 'Submit',
  type: BUTTON_TYPES.ADD,
};

export default ButtonComponent;
