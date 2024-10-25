import React from "react";
import "./Rightsidebar.css";
import "./Friends.css"
const Friends = () => {
  // Sample friends data
  const friends = [
    {
      id: 1,
      name: "Jane Doe",
      username: "@jane_doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "John Smith",
      username: "@johnsmith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Alice Johnson",
      username: "@alicejohnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="rightsidebar">
      <h2 className="rightsidebar-title">Friends</h2>
      <div className="friends-container">
        {friends.map((friend) => (
          <div key={friend.id} className="friend">
            <div className="friend-header">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="friend-avatar"
              />
              <div className="friend-info">
                <h3 className="friend-name">{friend.name}</h3>
                <p className="friend-username">{friend.username}</p>
              </div>
            </div>
            <button className="unadd-button">Unadd Friend</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
