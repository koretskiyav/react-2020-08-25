import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './product';
import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
  it('should init with 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });
  it('should decrement from 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should decrement from 0 amount, alot of clicks', () => {
    const wrapper = mount(<Product product={product} />);

    for (let i = 0; i < 100; i++) {
      wrapper.find('[data-id="product-decrement"]').simulate('click');
    }

    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should decrement from >0 amount', () => {
    product.amount = 5;
    console.log(product);
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('4');
  });
  it('should decrement from >0 amount, alot of clicks', () => {
    product.amount = 5;

    const wrapper = mount(<Product product={product} />);

    for (let i = 0; i < 100; i++) {
      wrapper.find('[data-id="product-decrement"]').simulate('click');
    }

    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should increment amount', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
});
