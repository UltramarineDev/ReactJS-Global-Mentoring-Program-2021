import React from 'react';

import { BUTTON_TYPES } from '/src/components/shared/constants';
import { wordings } from '/src/locales/wordings';

import Button from '../button/Button';
import SearchField from './SearchField/SearchField';
import styles from './Search.module.scss';

const Search = () => (
  <div className={styles.search}>
    <SearchField />
    <Button label={wordings.search} type={BUTTON_TYPES.SEARCH}/>
  </div>
);

export default Search;