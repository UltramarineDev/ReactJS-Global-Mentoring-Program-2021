import { cleanup } from '@testing-library/react';

import { validate } from './validate';

describe('validate movie form tests', () => {
  afterEach(cleanup);
  it('values without title', () => {
    const values = {
      releaseDate: 'title',
      overview: 'date',
      movieUrl: 'http/url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ title: 'Required' });
  });

  it('values with invalid title length', () => {
    const values = {
      title: '.'.repeat(1000),
      releaseDate: 'title',
      overview: 'date',
      movieUrl: 'http/url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ title: 'Must be 100 characters or less' });
  });

  it('values without releaseDate', () => {
    const values = {
      title: 'test',
      overview: 'date',
      movieUrl: 'http/url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ releaseDate: 'Required' });
  });

  it('values without overview', () => {
    const values = {
      title: 'test',
      releaseDate: 'title',
      movieUrl: 'http/url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ overview: 'Required' });
  });

  it('values with invalid overview length', () => {
    const values = {
      title: 'test',
      releaseDate: 'title',
      overview: '.'.repeat(1001),
      movieUrl: 'http/url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ overview: 'Must be 1000 characters or less' });
  });

  it('values with invalid movieUrl', () => {
    const values = {
      title: 'test',
      releaseDate: 'title',
      overview: 'test',
      movieUrl: 'url',
      runtime: 100,
    };
    expect(validate(values)).toEqual({ movieUrl: 'Invalid movie url' });
  });

  it('values with invalid runtime', () => {
    const values = {
      title: 'test',
      releaseDate: 'title',
      overview: 'test',
      movieUrl: 'http/url',
      runtime: -100,
    };
    expect(validate(values)).toEqual({ runtime: 'Must be more than 0' });
  });
});
