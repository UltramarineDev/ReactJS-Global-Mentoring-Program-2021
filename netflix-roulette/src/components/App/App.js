import React, { Suspense } from 'react';

import ErrorBoundary from './error-boundary';
import Footer from '../shared/footer/Footer';

const Home = React.lazy(() => import('../features/home'));

//TODO: Implement app default font family, font size
const App = () => (
  <Suspense fallback="Loading...">
    <ErrorBoundary>
      <Home />
      <Footer />
    </ErrorBoundary>
  </Suspense>
);

export default App;
