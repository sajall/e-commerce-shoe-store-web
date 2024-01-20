// ChatBoxMessenger.jsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageBox, ChatItem, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import './ChatBox.css'; // Create a CSS file for your styling

const ChatBox = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat box when new messages are added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleNewUserMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const message = {
      position: 'right',
      type: 'text',
      text: newMessage,
      date: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const toggleChatBox = () => {
    setShowChatBox((prev) => !prev);
  };

  return (
    <div className={`chat-messenger-container ${showChatBox ? 'chat-open' : ''}`}>
      <button className="chat-messenger-icon" onClick={toggleChatBox}>
        📬
      </button>

      <div className="chat-box-messenger" ref={chatBoxRef}>
        <ChatItem
          avatar={'path/to/store-logo.png'} // Replace with your store's logo
          alt={'Shoe Store'}
          title={'Shoe Store Support'}
        />

        <div className="message-container-messenger">
          {messages.map((message, index) => (
            <MessageBox
              key={index}
              position={message.position}
              type={message.type}
              text={message.text}
              date={message.date}
            />
          ))}
        </div>

        <div className="input-container-messenger">
          <Input
            placeholder="Type your message..."
            multiline={false}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send-button-messenger" onClick={handleNewUserMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
