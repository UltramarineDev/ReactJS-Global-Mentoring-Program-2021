import React from 'react';
import PropTypes from 'prop-types';

import { wordings } from '../../../../locales/wordings';
import styles from '../../../../../styles/SearchField.module.scss';

const SearchField = ({ onChange, initialValue }) => (
  <input className={styles.input} aria-label="search_field" type="search" placeholder={wordings.search_placeholder} onChange={onChange} value={initialValue} />
);

SearchField.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
};

SearchField.defaultProps = {
  onChange: undefined,
  initialValue: '',
};

export default SearchField;
