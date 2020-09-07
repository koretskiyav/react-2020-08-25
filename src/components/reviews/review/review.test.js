import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import { restaurants } from '../../../fixtures';

const reviews = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(
      <Review user={reviews.user} text={reviews.text} rating={reviews.rating} />
    );
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
});
