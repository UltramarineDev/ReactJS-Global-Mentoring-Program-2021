import React from 'react';

import { BUTTON_TYPES } from '/src/components/shared/constants';

import Button from '../button';
import SearchField from './search-field';
import styles from './Search.module.scss';

const SearchComponent = () => (
  <div className={styles.search}>
    <SearchField />
    <Button label='SEARCH' type={BUTTON_TYPES.SEARCH}/>
  </div>
);

export default SearchComponent;