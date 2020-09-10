import React, {useMemo} from 'react';
import { connect } from 'react-redux';

const Order = ({restaurants, amounts}) => {

  const orderedProducts = useMemo(
    () => {
      const result = [];
      for (let id in amounts){
        if (amounts[id] > 0){
          for (let restaurant of restaurants){
            const product = restaurant.menu.find(product => product.id === id);
            if (product){
              result.push({name: product.name, amount: amounts[id], id: id});
              break;
            }
          }
        }
      }
      return result;
    },
    [amounts, restaurants]
  );

  return (
    <div>
      <h2>Order: </h2>
      {orderedProducts.map((product) => (
        <p key={product.id}>{product.name}: {product.amount}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  amounts: state.order,
});

export default connect(mapStateToProps)(Order);