import React, {useMemo} from 'react';
import { connect } from 'react-redux';
import { remove }  from '../../redux/actions';
import Product from '../product';

const Order = ({restaurants, amounts, remove}) => {

  const orderedProducts = useMemo(
    () => {
      const result = [];
      let total = 0;
      for (let id in amounts){
        if (amounts[id] > 0){
          for (let restaurant of restaurants){
            const product = restaurant.menu.find(product => product.id === id);
            if (product){
              const subtotal = amounts[id]*product.price;
              result.push({...product, subtotal: subtotal});
              total+=subtotal;
              break;
            }
          }
        }
      }
      return {products: result, total: total};
    },
    [amounts, restaurants]
  );

  return (
    <div>
      <h2>Order: </h2>
      {orderedProducts.products.map((product) => (
        <div key={product.id}>
          <Product product={product}/>
          <button 
            onClick={() => remove(product.id)}
          >
            X
          </button>
          <p>Subtotal for product: {product.subtotal}</p>
        </div>
      ))}
      {orderedProducts.total > 0 &&
        <p>Total: {orderedProducts.total}</p>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  amounts: state.order,
});

const mapDispatchToProps = {
  remove
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);