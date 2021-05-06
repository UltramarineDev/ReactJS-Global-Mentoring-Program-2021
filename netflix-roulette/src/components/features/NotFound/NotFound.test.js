import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import NotFound from './NotFound';

describe('NotFound', () => {
  test('render NotFound', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
