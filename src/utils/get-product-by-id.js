import { restaurants } from '../fixtures';

const getProductById = (id) => {
  for (const restaurant of restaurants) {
    for (const product of restaurant.menu) {
      if (id === product.id) {
        return product;
      }
    }
  }
};

export default getProductById;
