import React, { Suspense } from 'react';

import ErrorBoundary from './error-boundary';
import Layout from '../layout';

const Home = React.lazy(() => import('../features/home'));
const HomeWithLayout = Layout(Home);

//TODO: Implement app default font family, font size
const App = () => (
  <Suspense fallback="Loading...">
    <ErrorBoundary>
      <HomeWithLayout />
    </ErrorBoundary>
  </Suspense>
);

export default App;