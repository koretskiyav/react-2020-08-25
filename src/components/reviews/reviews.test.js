import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const reviews = restaurants[0].reviews;
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render 2 child review elements, when current restaurant contain 2 reviews', () => {
    const reviews = restaurants[0].reviews;
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').children().length).toBe(2);
  });

  it('should render 3 child review elements, when current restaurant contain 3 reviews', () => {
    const reviews = restaurants[1].reviews;
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').children().length).toBe(3);
  });
});
