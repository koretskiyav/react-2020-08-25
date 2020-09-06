import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from '../../../fixtures';
import Review from '../review';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const review = reviews[0];

    const wrapper = mount(<Review key={review.id} {...review} />);

    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should render required information', () => {
    const user = 'TestUser123';
    const text = 'Some test review text';
    const review = { ...reviews[0], user, text };

    const wrapper = mount(<Review key={review.id} {...review} />);

    expect(wrapper.find('[data-id="review-user"]').text()).toBe(user);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(text);
  });
  it('should render rate', () => {
    const review = reviews[0];

    const wrapper = mount(<Review key={review.id} {...review} />);

    expect(wrapper.find('[data-id="review-rate"]').length).toBe(1);
  });
});
