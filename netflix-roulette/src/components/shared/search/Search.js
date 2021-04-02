import React from 'react';

import { buttonTypes, buttonSizes } from 'components/shared/constants';
import { wordings } from 'locales/wordings';

import Button from '../Button/Button';
import SearchField from './SearchField/SearchField';
import styles from './Search.module.scss';

const Search = () => (
  <div className={styles.search}>
    <SearchField />
    <Button label={wordings.search} type={buttonTypes.SEARCH} size={buttonSizes.LARGE} />
  </div>
);

export default Search;
