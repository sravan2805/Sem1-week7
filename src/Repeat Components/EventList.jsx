import React from 'react';
import Event from './Event';

function EventList({ events }) {
  return (
    <div>
      {events.map(event => (
        <Event key={event.id} name={event.name} date={event.date} />
      ))}
    </div>
  );
}

export default EventList;
