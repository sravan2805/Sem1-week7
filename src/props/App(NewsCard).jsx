// App.js
import React from 'react';
import NewsCard from './NewsCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <NewsCard
        headline="New Tech Innovations in 2024"
        summary="The tech world is abuzz with new innovations in AI, blockchain, and quantum computing."
        source="Tech Times"
      />
      <NewsCard
        headline="Global Markets See a Surge"
        summary="Global stock markets experienced a surge today, driven by optimism in economic recovery."
        source="Market Watch"
      />
      <NewsCard
        headline="Climate Change Action Plan Announced"
        summary="World leaders have announced a comprehensive action plan to tackle climate change."
        source="Global News"
      />
      <NewsCard
        headline="Breakthrough in Medical Research"
        summary="A breakthrough in medical research could lead to new treatments for chronic diseases."
        source="Health Daily"
      />
    </div>
  );
};

export default App;
