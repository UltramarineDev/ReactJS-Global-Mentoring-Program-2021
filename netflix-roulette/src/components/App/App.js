import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundaryContainer';
import Footer from '../shared/footer/Footer';
import { wordings } from '/src/locales/wordings';
import MovieDetails from '../features/MovieDetails/MovieDetailsContainer';

const Home = React.lazy(() => import('../features/Home/HomeContainer'));

const App = () => (
  <Suspense fallback={wordings.loading}>
    <ErrorBoundary>
      <MovieDetails />
      <Footer />
    </ErrorBoundary>
  </Suspense>
);

export default App;
