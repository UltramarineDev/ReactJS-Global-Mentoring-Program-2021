import React from 'react';

import LayoutComponent from './Layout';

const withLayout = (Component) => {
  const Layout = props => (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  );

  return Layout;
};

export default withLayout;
