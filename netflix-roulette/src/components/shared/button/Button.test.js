import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { buttonSizes } from 'components/shared/constants';

import { getButtonSizeStyle } from './utils';
import Button from './Button';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Button tests', () => {
  afterEach(cleanup);
  it('getButtonSizeStyle', () => {
    const size = buttonSizes.LARGE;
    const styles = {};
    const expected = styles.largeStye;
    expect(getButtonSizeStyle(size, styles)).toEqual(expected);
  });

  it('getButtonSizeStyle', () => {
    const size = 'smth';
    const styles = {};
    const expected = styles.mediumSize;
    expect(getButtonSizeStyle(size, styles)).toEqual(expected);
  });

  it('renders Button', () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick} />);
    expect(asFragment(<Button onClick={onClick} />)).toMatchSnapshot();
  });
});
