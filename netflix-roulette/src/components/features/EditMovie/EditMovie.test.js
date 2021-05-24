import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import EditMovie from './EditMovie';

const mockDispatch = jest.fn();
const state = { fetchMovies: { movie: {} } };

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn().mockReturnValue(state),
}));

describe('Edit movie tests', () => {
  it('renders EditMovie', () => {
    const onSave = jest.fn();
    const movieId = 1;
    const { asFragment } = render(<EditMovie onSave={onSave} movieId={movieId} />);
    expect(asFragment(<EditMovie onSave={onSave} movieId={movieId} />)).toMatchSnapshot();
  });

  it('calls onSave callback handler', () => {
    const onSave = jest.fn();
    const movieId = 1;
    const { getByTestId } = render(<EditMovie onSave={onSave} movieId={movieId} />);
    const button = getByTestId('save_form');

    fireEvent.click(button);

    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
