import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, screen, render, queryByAttribute, cleanup } from '@testing-library/react';

import { getMovieAction } from 'actions';

import { getOptions } from '../MoviesList/utils';
import MovieCard from './MovieCard';
import { movieActions, movieActionLabels } from '../MoviesList/constants';
import OptionItem from '../dropdown/OptionItem/OptionItem';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('actions', () => ({
  getMovieAction: jest.fn() }
));

jest.mock('../dropdown/OptionItem/OptionItem');

describe('MovieCard tests', () => {
  afterEach(cleanup);
  test('renders MovieCard', () => {
    const onActionClick = jest.fn();
    const movie = {};
    const actions = getOptions(movieActions, movieActionLabels);
    const component = renderer.create(
      <MemoryRouter>
        <MovieCard onActionClick={onActionClick} movie={movie} actions={actions} />
      </MemoryRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders MovieCard with showOptions', () => {
    const onActionClick = jest.fn();
    const movie = {};
    const actions = getOptions(movieActions, movieActionLabels);
    const dom = render(
      <MemoryRouter>
        <MovieCard onActionClick={onActionClick} movie={movie} actions={actions} />
      </MemoryRouter>,
    );
    const getById = queryByAttribute.bind(null, 'id');
    const link = getById(dom.container, 'set_options');
    OptionItem.mockImplementation(() => <div>OptionItem</div>);

    fireEvent.click(link);
    expect(screen.getAllByText('OptionItem')).toHaveLength(2);
  });

  test('renders MovieCard with getMovieAction', () => {
    const onActionClick = jest.fn();
    const movie = { id: 1 };
    const actions = getOptions(movieActions, movieActionLabels);
    const dom = render(
      <MemoryRouter>
        <MovieCard onActionClick={onActionClick} movie={movie} actions={actions} />
      </MemoryRouter>,
    );
    const getById = queryByAttribute.bind(null, 'id');
    const link = getById(dom.container, 'movie_link');

    fireEvent.click(link);
    expect(getMovieAction).toBeCalled();
  });
});
