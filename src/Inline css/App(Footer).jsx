import React from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Footer
        content="© 2024 My Website. All rights reserved."
        backgroundColor="darkslategray"
        padding="20px"
        fontSize="14px"
      />
      <Footer
        content="Contact us at contact@mywebsite.com"
        backgroundColor="black"
        padding="15px"
        fontSize="12px"
      />
    </div>
  );
};

export default App;
