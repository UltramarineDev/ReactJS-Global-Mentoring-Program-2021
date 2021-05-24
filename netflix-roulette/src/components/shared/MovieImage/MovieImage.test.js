import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MovieImage from './MovieImage';

describe('MovieCard tests', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders MovieImage', () => {
    const { asFragment } = render(<MovieImage />);
    expect(asFragment(<MovieImage />)).toMatchSnapshot();
  });
});
