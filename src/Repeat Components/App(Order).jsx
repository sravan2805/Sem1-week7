import React from 'react';
import OrderList from './OrderList';

function App() {
  const orders = [
    { id: 1, productName: 'Laptop', quantity: 2 },
    { id: 2, productName: 'Headphones', quantity: 5 },
    { id: 3, productName: 'Keyboard', quantity: 3 },
  ];

  return (
    <div>
      <h1>Order List</h1>
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
