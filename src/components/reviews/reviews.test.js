import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

const names = restaurants[0].reviews.map((review) => review.user);
const texts = restaurants[0].reviews.map((review) => review.text);

describe('Reviews', () => {
  it('should render math of reviws', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(
      restaurants[0].reviews.length
    );
  });
  it('should render all names', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const node = wrapper
      .find('[data-id="review-user"]')
      .map((node) => node.text());
    expect(node).toStrictEqual(names);
  });
  it('should render all rate', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(
      restaurants[0].reviews.length
    );
    const node = wrapper
      .find('[data-id="rate"]')
      .find('[data-id="star"]')
      .forEach((node) => {
        expect(node.type()).toBe('svg');
      });
  });
});
