import React from 'react';
import Order from '../orders/order';
import { connect } from 'react-redux';

const Orders = ({ items, menu }) => {
  const total = Object.keys(items).reduce((init, itemKey) => {
    const amount = items[itemKey];
    const price = menu[itemKey].price;
    return init + amount * price;
  }, 0);

  return (
    <div>
      {Object.keys(items).map(
        (itemKey) =>
          items[itemKey] > 0 && (
            <Order key={itemKey} item={menu[itemKey]} amount={items[itemKey]} />
          )
      )}
      {total > 0 && <div>Total {total}$</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.order,
  menu: state.menu,
});

export default connect(mapStateToProps)(Orders);
