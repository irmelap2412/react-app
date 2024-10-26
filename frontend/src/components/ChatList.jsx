import React from 'react';
import './ChatList.css';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-list">
      <h2>Your Conversations</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onSelectChat(chat.id)} className="chat-item">
            <img src={chat.avatar} alt={`${chat.name}'s avatar`} className="chat-avatar" />
            <div className="chat-info">
              <h3>{chat.name}</h3>
              <p>{chat.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;