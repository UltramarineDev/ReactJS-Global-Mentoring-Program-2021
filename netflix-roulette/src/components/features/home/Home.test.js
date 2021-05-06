import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from './Home';

configure({ adapter: new Adapter() });

describe('Home tests', () => {
  afterEach(() => {
    cleanup();
  });
  jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ query: '123' }),
  }));
  it('renders home', () => {
    const wrapper = shallow(<Home />);
    screen.debug();
    expect(wrapper).toBeTruthy();
  });
});
