import React from 'react';
import './Notifications.css';

const Notifications = () => {
  // Hardcoded notifications data
  const notifications = [
    {
      id: 1,
      user: "Jane Doe",
      action: "liked your post",
      time: "4 seconds ago",
      actionText: "View post",
      actionLink: "#post-1"
    },
    {
      id: 2,
      user: "John Smith",
      action: "commented on your photo",
      time: "2 minutes ago",
      actionText: "View comment",
      actionLink: "#comment-1"
    },
    {
      id: 3,
      user: "Alice Johnson",
      action: "shared your post",
      time: "1 hour ago",
      actionText: "View post",
      actionLink: "#post-2"
    },
    {
      id: 4,
      user: "Bob Wilson",
      action: "mentioned you in a comment",
      time: "3 hours ago",
      actionText: "View comment",
      actionLink: "#comment-2"
    },
    {
      id: 5,
      user: "Emma Brown",
      action: "reacted to your story",
      time: "5 hours ago",
      actionText: "View story",
      actionLink: "#story-1"
    },
  ];

  return (
    <div className="notifications">
      <h2 className="notifications-title">Notifications</h2>
      <div className="notifications-container">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <p className="notification-content">
              <span className="user-name">{notification.user}</span> {notification.action} {notification.time}.{' '}
              <a href={notification.actionLink} className="notification-action-link">
                {notification.actionText}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;