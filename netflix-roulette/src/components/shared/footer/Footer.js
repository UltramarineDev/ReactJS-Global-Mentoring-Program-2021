import React from 'react';

import styles from '../../../../styles/Footer.module.scss';
import NetflixRoulette from '../NetflixRoulette/NetflixRoulette';

const Footer = () => (
  <div className={styles.footer}>
    <NetflixRoulette />
  </div>
);

export default Footer;
