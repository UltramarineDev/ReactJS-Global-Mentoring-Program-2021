import React from 'react';

import { wordings } from 'locales/wordings';
import './SearchField.module.scss';

const SearchField = () => (
  <input type="search" placeholder={wordings.search_placeholder} />
);

export default SearchField;
