import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { wordings } from 'locales/wordings';

import ErrorBoundary from './ErrorBoundary/ErrorBoundaryContainer';
import Footer from '../shared/footer/Footer';
import MovieDetails from '../features/MovieDetails/MovieDetails';
import Home from '../features/Home/Home';
import NotFound from '../features/NotFound/NotFound';

const App = () => (
  <Suspense fallback={wordings.loading}>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/search/:query" component={Home} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </ErrorBoundary>
  </Suspense>
);

export default App;
