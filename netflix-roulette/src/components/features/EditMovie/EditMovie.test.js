import { render, cleanup } from '@testing-library/react';
import React from 'react';

import EditMovie from './EditMovie';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

describe('Edit movie tests', () => {
  afterEach(cleanup);
  it('renders EditMovie', () => {
    const onSave = jest.fn();
    const movieId = 1;
    const { asFragment } = render(<EditMovie onSave={onSave} movieId={movieId} />);
    expect(asFragment(<EditMovie onSave={onSave} movieId={movieId} />)).toMatchSnapshot();
  });
});
