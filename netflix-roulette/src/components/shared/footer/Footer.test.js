import { render } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

describe('Tests for Footer', () => {
  test('renders MovieList', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
