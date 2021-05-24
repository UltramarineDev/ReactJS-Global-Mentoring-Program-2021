import { screen, cleanup } from '@testing-library/react';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// try BrowserRouter, initialValue(path)
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
