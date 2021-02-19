import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';

// set up enzyme
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Board rendering', () => {
  it('renders 64 squares', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.square')).toHaveLength(64);
  });
});
