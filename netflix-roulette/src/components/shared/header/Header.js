import React from 'react';
import PropTypes from 'prop-types';

import NetflixRoulette from '/src/components/shared/NetflixRoulette/NetflixRoulette';

import styles from './Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.header}>
    <NetflixRoulette/>
    {children}
  </div>
)

Header.propTypes = {
  children: PropTypes.node,
}

Header.defaultProps = {
  children: undefined,
}

export default Header;