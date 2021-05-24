import React from 'react';
import { render } from '@testing-library/react';

import MovieList from './MoviesList';

const fetchMovies = { isMoviesLoading: false, movies: {} };
const searchBy = { search: '' };
const deleteMovie = { isMovieDeleted: false };

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn().mockReturnValueOnce({ fetchMovies, searchBy, deleteMovie }),
}));

describe('MovieList tests', () => {
  it('renders MovieList', () => {
    const { asFragment } = render(<MovieList />);
    expect(asFragment(<MovieList />)).toMatchSnapshot();
  });
});
