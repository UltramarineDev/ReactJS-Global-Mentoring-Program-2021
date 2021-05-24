import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import '@testing-library/jest-dom/extend-expect';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../shared/MoviesList/MoviesList', () => 'MovieList');

describe('MovieDetails', () => {
  afterEach(() => {
    cleanup();
  });
  test('renders MovieDetails', () => {
    const state = { fetchMovies: { movie: { } } };
    useSelector.mockImplementation(() => state);

    const component = renderer.create(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders MovieDetails', () => {
    renderer.create(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test('renders MovieDetails', () => {
    const state = { fetchMovies: { movie: { runtime: 100, vote_average: 9 } } };
    useSelector.mockImplementation(() => state);
    
    render(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );

    expect(screen.getByText('9')).toBeInTheDocument();
  });
});
