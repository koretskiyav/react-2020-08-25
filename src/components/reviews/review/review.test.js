import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('user name is not empty', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="user"]').text().length).toBeGreaterThan(0);
  });

  it('rating equal or greater than 0', () => {
    const wrapper = mount(<Review review={review} />);
    expect(
      Number(wrapper.find('[data-id="rating"]').text())
    ).toBeGreaterThanOrEqual(0);
  });

  it('rating is equal or less than 5', () => {
    const wrapper = mount(<Review review={review} />);
    expect(
      Number(wrapper.find('[data-id="rating"]').text())
    ).toBeLessThanOrEqual(5);
  });
});
