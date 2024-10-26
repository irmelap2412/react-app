import React from "react";
import "./Rightsidebar.css";

const Friendactivity = () => {
  // Hardcoded posts data
  const posts = [
    {
      id: 1,
      author: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        'Just finished a great book! 📚 Highly recommend "The Midnight Library" by Matt Haig.',
      timestamp: "2 hours ago",
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Beautiful day for a hike! 🏞️ #NatureLover",
      timestamp: "4 hours ago",
      likes: 24,
      comments: 5,
    },
    {
      id: 3,
      author: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Just adopted this cutie! 🐶 Meet Max, my new furry friend.",
      timestamp: "6 hours ago",
      likes: 42,
      comments: 8,
    },
  ];

  return (
    <div className="rightsidebar">
      <h2 className="rightsidebar-title">Friend Activity</h2>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img
                src={post.avatar}
                alt={post.author}
                className="post-avatar"
              />
              <div className="post-info">
                <h3 className="post-author">{post.author}</h3>
                <p className="post-timestamp">{post.timestamp}</p>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="action-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="action-icon"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                {post.likes}
              </button>
              <button className="action-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="action-icon"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                {post.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friendactivity;
