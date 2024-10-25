import React from 'react';
import { MessageCircle } from 'lucide-react';
import './Messages.css';

export default function Messages() {
  return (
    <div className="message" role="button" tabIndex={0} aria-label="Open messages">
      <MessageCircle size={20} aria-hidden="true" />
      <span className="message-text">Messages</span>
    </div>
  );
}