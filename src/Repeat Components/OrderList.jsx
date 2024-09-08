import React from 'react';
import Order from './Order';

function OrderList({ orders }) {
  return (
    <div>
      {orders.map(order => (
        <Order key={order.id} productName={order.productName} quantity={order.quantity} />
      ))}
    </div>
  );
}

export default OrderList;
