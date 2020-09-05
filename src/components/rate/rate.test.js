import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Rate from './rate';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render', () => {
    const rating = restaurants[0].reviews[0].rating;
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('should render 5 child rate elements, when current review rating differs from 5', () => {
    const rating = 3;
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('[data-id="rate"]').children().length).toBe(5);
  });

  it('should checked 5 child rate elements, when current review rating is 5', () => {
    const rating = 5;
    const wrapper = mount(<Rate value={rating} />);
    expect(
      wrapper.find('[data-id="rate"]').children().filter({ checked: true })
        .length
    ).toBe(5);
  });

  it('should checked 3 child rate elements, when current review rating is 3', () => {
    const rating = 3;
    const wrapper = mount(<Rate value={rating} />);
    expect(
      wrapper.find('[data-id="rate"]').children().filter({ checked: true })
        .length
    ).toBe(3);
  });

  it('should checked 1 child rate elements, when current review rating is 1', () => {
    const rating = 1;
    const wrapper = mount(<Rate value={rating} />);
    expect(
      wrapper.find('[data-id="rate"]').children().filter({ checked: true })
        .length
    ).toBe(1);
  });
});
