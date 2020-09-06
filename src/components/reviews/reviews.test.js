import Reviews from './reviews';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews test', () => {
  it('should render reviews', () => {
    const reviews = [
      { id: '1', user: 'Test 1', text: 'Text 1', rating: 2 },
      { id: '2', user: 'Test 1', text: 'Text 1', rating: 2 },
    ];
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
    expect(wrapper.find('[data-id="review"]').at(0).prop('id')).toBe('1');
    expect(wrapper.find('[data-id="review"]').at(1).prop('id')).toBe('2');
  });
});
