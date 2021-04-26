import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { buttonTypes, buttonSizes } from 'components/shared/constants';
import { wordings } from 'locales/wordings';
import { setSearchExpressionAction } from 'components/actions';

import Button from '../Button/Button';
import SearchField from './SearchField/SearchField';
import styles from './Search.module.scss';

const Search = () => {
  const { query } = useParams();
  const [searchExpression, setSearchExpression] = useState(query);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (searchExpression) {
      dispatch(setSearchExpressionAction(searchExpression));
    }
  }, []);

  const handleSearch = () => {
    dispatch(setSearchExpressionAction(searchExpression));
    searchExpression ? history.push(`/search/${searchExpression}`) : history.push('/');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchExpression(value);
  };

  return (
    <div className={styles.search}>
      <SearchField onChange={handleChange} initialValue={searchExpression} />
      <Button label={wordings.search} type={buttonTypes.SEARCH} size={buttonSizes.LARGE} onClick={handleSearch} />
    </div>
  );
};

export default Search;
