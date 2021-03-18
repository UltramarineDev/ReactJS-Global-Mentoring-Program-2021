import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundaryContainer';
import Footer from '../shared/footer/Footer';
import { wordings } from '/src/locales/wordings';
import MovieDetails from '../features/MovieDetails/MovieDetails';
import Home from '../features/Home/Home';

const App = () => (
  <Suspense fallback={wordings.loading}>
    <ErrorBoundary>
      <Home />
      <Footer />
    </ErrorBoundary>
  </Suspense>
);

export default App;
