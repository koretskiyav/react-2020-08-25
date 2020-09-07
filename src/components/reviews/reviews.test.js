import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should render with 0 reviews', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
});
