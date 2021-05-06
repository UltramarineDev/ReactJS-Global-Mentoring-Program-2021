import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import { addMovieAction } from 'actions';

import { buildAddMovieInput, getInitialValues } from './utils';
import AddMovie from './AddMovie';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Add movie tests', () => {
  afterEach(cleanup);
  it('buildAddMovieInput', () => {
    const values = {
      title: 'title',
      releaseDate: 'date',
      movieUrl: 'url',
      genre: 'comedy',
    };

    const expected = {
      title: 'title',
      release_date: values.releaseDate,
      poster_path: values.movieUrl,
      genres: [values.genre],
      runtime: 0,
      overview: undefined,
    };
    expect(buildAddMovieInput(values)).toEqual(expected);
  });

  it('getInitialValues', () => {
    const movie = {
      release_date: 'date',
      poster_path: 'url',
      genres: 'comedy',
      overview: 'text',
      runtime: 'time',
    };

    const expected = {
      title: '',
      releaseDate: movie.release_date,
      movieUrl: movie.poster_path,
      genre: movie.genres[0],
      overview: movie.overview,
      runtime: movie.runtime,
    };

    expect(getInitialValues(movie)).toEqual(expected);
  });

  it('renders AddMovie', () => {
    const onSave = jest.fn();
    const { asFragment } = render(<AddMovie onSave={onSave} />);
    expect(asFragment(<AddMovie onSave={onSave} />)).toMatchSnapshot();
  });

  // it('calls onSave callback handler', () => {
  //   const onSave = jest.fn();

  //   const { getByText } = render(<AddMovie onSave={onSave} />);
  //   const button = getByText(/save/i);

  //   fireEvent.click(button);

  //   expect(onSave).toHaveBeenCalledTimes(1);
  //   // expect(buildAddMovieInput).toHaveBeenCalledTimes(1);
  //   // expect(addMovieAction).toHaveBeenCalledTimes(1);
  // });
});
