// App.js
import React from 'react';
import EventCard from './EventCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <EventCard
        eventName="React Conference 2024"
        date="2024-09-15"
        location="San Francisco, CA"
      />
      <EventCard
        eventName="JavaScript Summit"
        date="2024-11-20"
        location="New York, NY"
      />
      <EventCard
        eventName="Web Dev Workshop"
        date="2024-10-05"
        location="London, UK"
      />
    </div>
  );
};

export default App;
