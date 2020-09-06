import Enzyme, { mount } from 'enzyme';
import Review from './review';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('review tests', () => {
  it('should get props', () => {
    const wrapper = mount(
      <Review rating={3} text="Test text" user="Test user" />
    );
    expect(wrapper.find('[data-id="user"]').text()).toBe('Test user');
    expect(wrapper.find('[data-id="text"]').text()).toBe('Test text');
    expect(wrapper.find('[data-id="rate"]').prop('value')).toBe(3);
  });

  it('should show default user name', () => {
    const wrapper = mount(<Review rating={3} text="Test text" />);
    expect(wrapper.find('[data-id="user"]').text()).toBe('Anonymous');
  });
});
