import React from 'react';
import ReactLoader from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <ReactLoader type="ThreeDots" color="$color-red" height={80} width={80} />
  </div>
);

export default Loader;
