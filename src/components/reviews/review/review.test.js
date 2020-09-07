import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from '../../../fixtures';
import Review from './review';
import Rate from '../../rate';

const review = restaurants[0].reviews[0];
const anonymousReview = {
    id: '53b642d7-5e86-4717-a466-0640a1dee076',
    text: 'Perfect Margarita',
    rating: 5,
};

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review}/>);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should render text for review', ()=>{
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
  });
  it('should render name for review', ()=>{
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe(review.user);
  });
  it('should render anonymous label for review without name', ()=>{
    const wrapper = mount(<Review {...anonymousReview} />);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe('Anonymous');
  });
  it('should render rate component', ()=>{
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.containsMatchingElement(<Rate />)).toEqual(true);
  });
  it('should send corect props to Rate component', ()=>{
    const wrapper = mount(<Review {...review} />);
    const rate = wrapper.find(Rate);
    expect(rate.props().value).toEqual(review.rating);
  });
});
