import React from 'react';
import EventList from './EventList';

function App() {
  const events = [
    { id: 1, name: 'Conference', date: '2024-09-15' },
    { id: 2, name: 'Webinar', date: '2024-10-01' },
    { id: 3, name: 'Workshop', date: '2024-11-12' },
  ];

  return (
    <div>
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
}

export default App;
