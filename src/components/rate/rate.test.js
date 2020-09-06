import Rate from './rate';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate tests', () => {
  it('should render stars', () => {
    const wrapper = mount(<Rate value={3} />);
    expect(wrapper.find({ 'data-id': 'star', checked: true }).length).toBe(3);
    expect(wrapper.find({ 'data-id': 'star', checked: false }).length).toBe(2);
  });
});
