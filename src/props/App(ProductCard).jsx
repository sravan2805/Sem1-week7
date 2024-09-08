// App.js
import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProductCard
        productName="Cool Sneakers"
        price="79.99"
        description="Comfortable and stylish sneakers for everyday wear."
      />
      <ProductCard
        productName="Leather Jacket"
        price="149.99"
        description="A classic leather jacket with a timeless design."
      />
      <ProductCard
        productName="Wireless Headphones"
        price="89.99"
        description="High-quality wireless headphones with noise cancellation."
      />
      <ProductCard
        productName="Smartwatch"
        price="199.99"
        description="A smartwatch with fitness tracking and smart notifications."
      />
    </div>
  );
};

export default App;
