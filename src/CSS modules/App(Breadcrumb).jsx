import React from 'react';
import Breadcrumb from './Breadcrumb';

const App = () => {
  const breadcrumbItems = ['Home', 'Products', 'Electronics', 'Laptops'];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default App;
