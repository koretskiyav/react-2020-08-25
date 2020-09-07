import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import { restaurants } from '../../../fixtures';
import Rate from '../../rate';
import rate from '../../rate';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should render rate', () => {
    const wrapper = mount(<Rate rate={rate} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(0);
  });
});
