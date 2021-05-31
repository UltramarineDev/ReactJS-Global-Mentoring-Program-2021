import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { buttonTypes, buttonSizes } from '../constants';
import { wordings } from '../../../locales/wordings';
import { setSearchExpressionAction } from '../../../actions';

import Button from '../Button/Button';
import SearchField from './SearchField/SearchField';
import styles from '../../../../styles/Search.module.scss';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchExpression, setSearchExpression] = useState(query);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchExpression) {
      dispatch(setSearchExpressionAction(searchExpression));
    }
  }, [searchExpression]);

  const handleSearch = () => {
    dispatch(setSearchExpressionAction(searchExpression));
    searchExpression ? router.push(`/search/${searchExpression}`) : router.push('/');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchExpression(value);
  };

  return (
    <div className={styles.search}>
      <SearchField onChange={handleChange} initialValue={searchExpression} />
      <Button label={wordings.search} type={buttonTypes.PRIMARY} size={buttonSizes.LARGE} onClick={handleSearch} />
    </div>
  );
};

export default Search;
