// App.js
import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProductCard
        productName="Smartphone"
        price={699.99}
        description="A high-end smartphone with a sleek design and powerful features."
      />
      <ProductCard
        productName="Laptop"
        price={1299.99}
        description="A powerful laptop with a fast processor and high-resolution display."
      />
      <ProductCard
        productName="Wireless Headphones"
        price={199.99}
        description="Noise-cancelling wireless headphones with superior sound quality."
      />
    </div>
  );
};

export default App;
