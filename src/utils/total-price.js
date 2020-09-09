import getProductById from './get-product-by-id';

const totalPrice = (menu) => {
  const total = menu.reduce((acc, [id, count]) => {
    const product = getProductById(id);
    return acc + product.price * count;
  }, 0);
  return total;
};

export default totalPrice;
