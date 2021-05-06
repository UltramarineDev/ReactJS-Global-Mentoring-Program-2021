import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Footer from '../shared/footer/Footer';
import MovieDetails from '../features/MovieDetails/MovieDetails';
import Home from '../features/Home/Home';

jest.mock('../shared/footer/Footer');
jest.mock('../features/MovieDetails/MovieDetails');
jest.mock('../features/Home/Home');
jest.mock('../features/NotFound/NotFound');

describe('Tests for App Router', () => {
  it('Should render footer and HomePage on default route', () => {
    Footer.mockImplementation(() => <div>PageFooterMock</div>);
    Home.mockImplementation(() => <div>PageHomeMock</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('PageFooterMock')).toBeInTheDocument();
    expect(screen.getByText('PageHomeMock')).toBeInTheDocument();
  });

  it('Should render footer and MovieDetails for movie id route', () => {
    Footer.mockImplementation(() => <div>PageFooterMock</div>);
    MovieDetails.mockImplementation(() => <div>MovieDetailsMock</div>);

    render(
      <MemoryRouter initialEntries={['/movie/1']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('PageFooterMock')).toBeInTheDocument();
    expect(screen.getByText('MovieDetailsMock')).toBeInTheDocument();
  });
});
