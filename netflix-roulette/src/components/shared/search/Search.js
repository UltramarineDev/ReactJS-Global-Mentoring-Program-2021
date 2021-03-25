import React from 'react';

import { buttonTypes, buttonSizes } from '/src/components/shared/constants';
import { wordings } from '/src/locales/wordings';

import Button from '../button/Button';
import SearchField from './SearchField/SearchField';
import styles from './Search.module.scss';

const Search = () => (
  <div className={styles.search}>
    <SearchField />
    <Button label={wordings.search} type={buttonTypes.SEARCH} size={buttonSizes.LARGE} />
  </div>
);

export default Search;