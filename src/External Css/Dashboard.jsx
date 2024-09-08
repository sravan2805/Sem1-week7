// Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the external CSS file

const Dashboard = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the description for card 1' },
    { id: 2, title: 'Card 2', description: 'This is the description for card 2' },
    { id: 3, title: 'Card 3', description: 'This is the description for card 3' },
    { id: 4, title: 'Card 4', description: 'This is the description for card 4' },
    { id: 5, title: 'Card 5', description: 'This is the description for card 5' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
