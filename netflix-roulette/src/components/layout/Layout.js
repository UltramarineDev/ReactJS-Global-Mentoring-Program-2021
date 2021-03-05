import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

const LayoutComponent = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
