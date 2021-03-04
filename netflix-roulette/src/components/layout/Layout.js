import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

const PageComponent = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

PageComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageComponent;
