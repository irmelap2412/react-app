import React from 'react';
import './Matches.css';

const Matches = () => {
  // Hardcoded match data
  const matches = [
    { id: 1, name: 'Emma Johnson', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 2, name: 'David Brown', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 3, name: 'Sophia Lee', avatar: '/placeholder.svg?height=40&width=40' },
  ];

  return (
    <div className="matches-container">
      <h2 className="matches-title">Your Matches</h2>
      <div className="matches-list">
        {matches.map(match => (
          <div key={match.id} className="match-item">
            <img src={match.avatar} alt={match.name} className="match-avatar" />
            <p className="match-name">{match.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
