import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rate from '../rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Rate value={3} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  })
  it('has 5 stars', () => {
    const wrapper = mount(<Rate value={3} />);
    expect(wrapper.find('svg').length).toBe(5)
  })
  it('has 3 filled star', () => {
    const wrapper = mount(<Rate value={3} />);
    expect(wrapper.find('svg').filter('.checked').length).toBe(3)
  })
})
