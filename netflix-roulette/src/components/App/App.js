import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundaryContainer';
import Footer from '../shared/footer/Footer';
import { wordings } from '/src/locales/wordings';

const Home = React.lazy(() => import('../features/Home/HomeContainer'));

const App = () => (
  <Suspense fallback={wordings.loading}>
    <ErrorBoundary>
      <Home />
      <Footer />
    </ErrorBoundary>
  </Suspense>
);

export default App;
