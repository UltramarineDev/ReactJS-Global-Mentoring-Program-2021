import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { setSearchExpressionAction } from 'actions';

import Search from './Search';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('actions', () => ({
  setSearchExpressionAction: jest.fn() }
));

describe('Search tests', () => {
  afterEach(() => {
    cleanup();
  });
  test('renders Search', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('tests handleChange Search', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const searchField = getByLabelText('search_field');
    fireEvent.change(searchField, { target: { value: '23' } });

    expect(setSearchExpressionAction).toBeCalled();
  });
});
