import React from 'react';
import PropTypes from 'prop-types';
import BasketProduct from './basketProduct/basketProduct';
import { connect } from 'react-redux';

// import counter from '../../hocs/counter';

const Basket = ({ products, selectedProductsId }) => {
  let basketPrice = 0;
  const newProductList = products.filter((product) => {
    for (let key in selectedProductsId) {
      if (key === product.id) {
        basketPrice += selectedProductsId[key] * product.price;
        return true;
      }
    }
    return false;
  });

  // let ids=Object.keys(selectedProductsId)
  // const newProductList= products.filter((product)=>{
  //   for (let i=0;i<=ids.length;i++){
  //     if(ids[i]===product.id){
  //       return true
  //     }
  //   }
  //     return false
  //
  // })

  // const basketPrice = newProductList.reduce((sum, current) => sum + current.price, 0);

  return (
    <div>
      <div>{basketPrice}</div>
      {newProductList.map((product) => (
        <BasketProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  selectedProductsId: state.order,
});

export default connect(mapStateToProps)(Basket);
