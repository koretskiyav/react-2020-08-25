import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  })
  it('has name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-name"]').text().length)
  })
})
