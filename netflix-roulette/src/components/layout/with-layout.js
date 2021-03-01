import React from 'react';

import Page from './layout.component';

const withLayout = (WrappedComponent) => {
  const Layout = props => (
    <Page>
      <WrappedComponent {...props} />
    </Page>
  );

  return Layout;
};

export default withLayout;
