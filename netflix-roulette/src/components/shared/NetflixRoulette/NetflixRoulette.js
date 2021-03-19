import React from 'react';

import { wordings } from '/src/locales/wordings';
import styles from './NetflixRoulette.module.scss';

const NetflixRoulette = () => (
  <span className={styles.title}><strong>{wordings.netflix}</strong>{wordings.roulette}</span>
);

export default NetflixRoulette;
