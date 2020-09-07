import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from '../../../fixtures';
import Review from './review';

const review = restaurants[0].reviews[0];
const reviewWithNoUser = { ...review };
delete reviewWithNoUser.user;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find('.review-test').length).toBe(1);
  });
  it('should render with no user', () => {
    const wrapper = mount(<Review key={review.id} {...reviewWithNoUser} />);
    expect(wrapper.find('.review-test').length).toBe(1);
    expect(wrapper.find('h4').text()).toBe('Anonymous');
  });
});
