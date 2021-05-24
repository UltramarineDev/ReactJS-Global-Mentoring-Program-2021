import React from 'react';
import { render } from '@testing-library/react';

import DeleteMovieForm from './DeleteMovieForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('DeleteMovie', () => {
  test('renders delete form component', () => {
    const movieId = 1;
    const { asFragment } = render(<DeleteMovieForm movieId={movieId} />);
    expect(asFragment(<DeleteMovieForm movieId={movieId} />)).toMatchSnapshot();
  });
});
