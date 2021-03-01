import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import styles from './component.scss';

const PageComponent = ({children}) => (
  <>
    <div className={styles.layout}></div>
      <Header />
      {children}
      <Footer />
  </>
);

PageComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageComponent;
