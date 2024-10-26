import React, { useState } from 'react';
import './ChatDetail.css';

const ChatDetail = ({ chat, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-detail">
      <div className="chat-header">
        <img src={chat.avatar} alt={`${chat.name}'s avatar`} className="chat-avatar" />
        <h2>{chat.name}</h2>
      </div>
      <div className="message-list">
        {chat.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'user' : 'other'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatDetail;