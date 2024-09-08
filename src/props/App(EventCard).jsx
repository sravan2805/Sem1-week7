// App.js
import React from 'react';
import EventCard from './EventCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <EventCard
        eventName="Music Festival"
        date="September 15, 2024"
        location="Central Park, New York"
      />
      <EventCard
        eventName="Tech Conference"
        date="October 10, 2024"
        location="Moscone Center, San Francisco"
      />
      <EventCard
        eventName="Art Exhibition"
        date="November 5, 2024"
        location="Louvre Museum, Paris"
      />
      <EventCard
        eventName="Food Market"
        date="December 20, 2024"
        location="Pike Place Market, Seattle"
      />
    </div>
  );
};

export default App;
