import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import MovieDetails from './MovieDetails';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue({ movie: {} }),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../shared/MoviesList/MoviesList', () => 'MovieList');

describe('MovieDetails', () => {
  test('renders MovieDetails', () => {
    const component = renderer.create(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
