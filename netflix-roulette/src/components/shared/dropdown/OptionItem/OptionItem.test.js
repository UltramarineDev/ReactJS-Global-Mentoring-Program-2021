import React from 'react';
import { render, cleanup } from '@testing-library/react';

import OptionItem from './OptionItem';

describe('OptionItem tests', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders OptionItem', () => {
    const label = '';
    const value = {};
    const onClick = jest.fn();
    const { asFragment } = render(<OptionItem label={label} onClick={onClick} value={value} />);
    expect(asFragment(<OptionItem label={label} onClick={onClick} value={value} />)).toMatchSnapshot();
  });
});
