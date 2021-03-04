import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TYPES } from '/src/components/shared/constants';
import styles from './Button.module.scss';

const ButtonComponent = ({ label, type, icon }) => (
  <>
    {type === BUTTON_TYPES.ADD &&
    <a className={styles.addButton} href="#">
      <>
      <span>{icon}</span>
          <span>{label}</span>
      </>
      </a>
    }
    {type === BUTTON_TYPES.SEARCH &&
    <a className={styles.searchButton} href="#">
      <>
      <span>{icon}</span>
          <span>{label}</span>
      </>
      </a>
    }
  </>
);

ButtonComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
};

ButtonComponent.defaultProps = {
  label: 'Submit',
  type: BUTTON_TYPES.ADD,
  icon: undefined,
};

export default ButtonComponent;