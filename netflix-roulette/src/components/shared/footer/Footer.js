import React from 'react';

import styles from './Footer.module.scss';
import NetflixRoulette from '../netflix-roulette';

const Footer = () => (
  <div className={styles.footer}>
    <NetflixRoulette />
  </div>
);

export default Footer;
