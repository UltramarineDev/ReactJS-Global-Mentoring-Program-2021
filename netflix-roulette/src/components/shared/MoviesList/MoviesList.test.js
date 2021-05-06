import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import MovieList from './MoviesList';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn().mockReturnValue({ movies: {}, search: '', isMoviesLoading: false, isMovieDeleted: false }),
}));

describe('MovieList tests', () => {
  test('renders MovieList', () => {
    const { asFragment } = render(<MovieList />);
    expect(asFragment(<MovieList />)).toMatchSnapshot();
  });
});
