import React from 'react';

import styles from './Footer.module.scss';
import NetflixRoulette from '../../shared/netflix-roulette';

const FooterComponent = () => (
  <div className={styles.footer}>
    <NetflixRoulette/>
  </div>
);

export default FooterComponent;
