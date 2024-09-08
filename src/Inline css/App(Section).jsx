import React from 'react';
import Section from './Section';

const App = () => {
  return (
    <div>
      <Section
        margin="20px"
        padding="15px"
        border="2px solid black"
      >
        <h2>Introduction</h2>
        <p>This is the introduction section of the page.</p>
      </Section>

      <Section
        margin="40px 0"
        padding="20px"
        border="1px dashed gray"
      >
        <h2>About Us</h2>
        <p>We are a company dedicated to providing excellent services.</p>
      </Section>

      <Section
        margin="10px auto"
        padding="25px"
        border="3px dotted blue"
      >
        <h2>Contact</h2>
        <p>Contact us at contact@company.com.</p>
      </Section>
    </div>
  );
};

export default App;
