import React from 'react';
import PropTypes from 'prop-types';

import NetflixRoulette from '../NetflixRoulette/NetflixRoulette';

import styles from '../../../../styles/Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.header}>
    <NetflixRoulette />
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
