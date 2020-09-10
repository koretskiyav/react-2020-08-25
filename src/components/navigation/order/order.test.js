import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Restaurants from './restaurants';
import store from '../../../redux/store';

import Order from './order';

import { restaurants } from '../../../fixtures';

const product = restaurants[0].menu[0];

describe('Order', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Order />
      </Provider>
    );
  });

  const getByDataId = (dataId) => wrapper.find(`[data-test-id="${dataId}"]`);
  const getOrderButton = () => getByDataId('order-button');
  const getOrderPanel = () => getByDataId('order-panel');
  const getOrderCenterBox = () => getByDataId('order-center-box');
  const getOrderTitle = () => getByDataId('order-title');
  const getOrderRestaurants = () => wrapper.find(Restaurants);
  const simulateButtonOpenPanel = () => getOrderButton().simulate('click');

  it('should render button', () => {
    expect(getOrderButton().length).toBe(1);
  });

  it('should render panel', () => {
    simulateButtonOpenPanel();
    expect(getOrderPanel().length).toBe(1);
  });

  it('should render center box', () => {
    simulateButtonOpenPanel();
    expect(getOrderCenterBox().length).toBe(1);
  });

  it('should render title', () => {
    simulateButtonOpenPanel();
    expect(getOrderTitle().length).toBe(1);
  });

  it('should render title column', () => {
    simulateButtonOpenPanel();
    expect(getOrderTitle().children().length).toBe(8);
  });

  it('should render Restaurants', () => {
    simulateButtonOpenPanel();
    expect(getOrderRestaurants().length).toBe(0);
  });

  it('should render Restaurants', () => {
    simulateButtonOpenPanel();
    store.dispatch({
      type: 'INCREMENT',
      payload: { id: product.id },
    });
    console.log(store.getState().order);
    console.log(getOrderCenterBox().debug());
    expect(getOrderRestaurants().length).toBe(1);
  });
});
