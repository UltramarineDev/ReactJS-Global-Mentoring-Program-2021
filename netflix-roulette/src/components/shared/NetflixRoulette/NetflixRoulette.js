import React from 'react';

import { wordings } from 'locales/wordings';

import styles from './NetflixRoulette.module.scss';

const NetflixRoulette = () => (
  <span className={styles.title}>
    <strong>{wordings.netflix}</strong>
    {wordings.roulette}
  </span>
);

export default NetflixRoulette;
