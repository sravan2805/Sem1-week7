// App.js
import React from 'react';
import NewsCard from './NewsCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <NewsCard
        headline="Breaking News: Major Event Unfolds"
        summary="A major event has unfolded today, changing the course of current affairs. Stay tuned for more details."
        source="News Network"
      />
      <NewsCard
        headline="Technology Innovation Shakes the Industry"
        summary="A new technological innovation is set to revolutionize the industry. Experts weigh in on the impact."
        source="Tech Times"
      />
      <NewsCard
        headline="Sports Update: Team Wins Championship"
        summary="The team has won the championship after a thrilling final match. Fans celebrate the historic victory."
        source="Sports Daily"
      />
    </div>
  );
};

export default App;
