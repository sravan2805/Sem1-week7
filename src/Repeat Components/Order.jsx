import React from 'react';

function Order({ productName, quantity }) {
  return (
    <div style={orderStyle}>
      <h4>{productName}</h4>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

const orderStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Order;
