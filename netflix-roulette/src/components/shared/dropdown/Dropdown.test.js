import React from 'react';
import { fireEvent, screen, render, queryByAttribute, cleanup } from '@testing-library/react';

import { getGenres } from 'components/features/MovieForm/utils';

import Dropdown from './Dropdown';

describe('Dropdown tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(cleanup);
  test('renders Dropdown', () => {
    const onChange = jest.fn();
    const value = '';
    const options = getGenres();
    const { asFragment } = render(<Dropdown value={value} options={options} onChange={onChange} />);
    expect(asFragment(<Dropdown value={value} options={options} onChange={onChange} />)).toMatchSnapshot();
  });

  test('renders Dropdown with showOptions', () => {
    const onChange = jest.fn();
    const value = '';
    const options = getGenres();
    const dom = render(<Dropdown value={value} options={options} onChange={onChange} />);

    const getById = queryByAttribute.bind(null, 'data-testid');
    const link = getById(dom.container, 'set_options_dropdown_label');

    fireEvent.click(link);
    expect(screen.getAllByTestId('option_item')).toHaveLength(5);
  });

  test('Dropdown with onChangeClick', () => {
    const onChange = jest.fn();
    const value = '';
    const options = getGenres();
    const { getByText, getByTestId } = render(<Dropdown value={value} options={options} onChange={onChange} />);

    const link = getByTestId('set_options_dropdown_label');
    fireEvent.click(link);

    const optionItem = getByText('COMEDY');
    fireEvent.click(optionItem);
    expect(onChange).toBeCalled();
  });
});
