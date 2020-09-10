import { createStore } from 'redux';
import { restaurants } from '../fixtures';
import reducer from './reducer';

function flattenMenu(menu) {
  return menu.reduce(
    (obj, { id, name, price }) => ({ ...obj, [id]: { name, price, id } }),
    {}
  );
}

const initialStore = {
  // menu: restaurants.reduce((init, { menu }) => {
  //   const tmp = { ...init };
  //
  //   menu.forEach(
  //     (item) => (tmp[item.id] = { name: item.name, price: item.price })
  //   );
  //   return tmp;
  // }, {}),

  menu: restaurants.reduce((init, { menu }) => {
    return {
      ...init,
      ...flattenMenu(menu),
    };
  }, {}),
};

const store = createStore(reducer, initialStore);

export default store;
