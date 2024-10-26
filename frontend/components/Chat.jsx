import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatDetail from "./ChatDetail";
import "./Chat.css";

const Chat = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "Hey, how are you?",
      messages: [
        { sender: "other", text: "Hey, how are you?" },
        { sender: "user", text: "I'm good, thanks! How about you?" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=50&width=50",
      lastMessage: "See you tomorrow!",
      messages: [
        { sender: "user", text: "Are we still on for tomorrow?" },
        { sender: "other", text: "Yes, see you tomorrow!" },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChat(chats.find((chat) => chat.id === chatId));
  };

  const handleSendMessage = (message) => {
    if (selectedChat) {
      const updatedChats = chats.map((chat) => {
        if (chat.id === selectedChat.id) {
          return {
            ...chat,
            messages: [...chat.messages, { sender: "user", text: message }],
            lastMessage: message,
          };
        }
        return chat;
      });
      setChats(updatedChats);
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, { sender: "user", text: message }],
        lastMessage: message,
      });
    }
  };

  return (
    <div className="chat-container">
      <ChatList chats={chats} onSelectChat={handleSelectChat} />
      {selectedChat && (
        <ChatDetail chat={selectedChat} onSendMessage={handleSendMessage} />
      )}
    </div>
  );
};

export default Chat;
