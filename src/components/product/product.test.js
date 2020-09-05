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
  it('should increment amount', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });

  describe('decrement function', () => {
    it('should return "7", when amount decrement by three steps from 10', () => {
      const wrapper = mount(<Product product={product} initialAmount={10} />);
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      expect(wrapper.find('[data-id="product-amount"]').text()).toBe('7');
    });

    it('should return "1", when amount decrement by one step from 2', () => {
      const wrapper = mount(<Product product={product} initialAmount={2} />);
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
    });

    it('should return "0", when amount decrement by one step from 1', () => {
      const wrapper = mount(<Product product={product} initialAmount={1} />);
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
    });

    it('should return "0", when amount decrement by several steps from 1', () => {
      const wrapper = mount(<Product product={product} initialAmount={1} />);
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
    });

    it('should return "0", when amount decrement by one step from 0', () => {
      const wrapper = mount(<Product product={product} initialAmount={0} />);
      wrapper.find('[data-id="product-decrement"]').simulate('click');
      expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
    });
  });
});
