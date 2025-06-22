import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaComments, FaTimes } from 'react-icons/fa';
import '../App.css';

const ChatBot = () => {
  const location = useLocation(); // ✅ This can be safely used before hook rules

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const iconRef = useRef(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const margin = 50;
    const iconSize = 50;
    const x = window.innerWidth - iconSize - margin;
    const y = window.innerHeight - iconSize - margin;
    setPosition({ x, y });

    const handleResize = () => {
      const newX = window.innerWidth - iconSize - margin;
      const newY = window.innerHeight - iconSize - margin;
      setPosition(prev => ({
        x: prev.x > newX ? newX : prev.x,
        y: prev.y > newY ? newY : prev.y
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Safely return null AFTER hooks
  if (location.pathname !== '/shopping') {
    return null;
  }

  const toggleChat = () => setIsOpen(!isOpen);

  const predefinedAnswers = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! Looking for flowers?",
    "which flowers are best for birthday": "Roses, lilies, or orchids make great birthday gifts!",
    "what flowers express love": "Red roses are the most popular to express love.",
    "what are the best flowers for a get well soon gift": "Bright daisies, sunflowers, and tulips are perfect!",
    "do you deliver in delhi": "Yes, we offer same-day delivery in Delhi!",
    "do you have anniversary flowers": "Yes! We have special bouquets for anniversaries.",
    "ok": "I hope everything is clear now! If you want to know anything else, explore the website.",
    "okayy bye": "Goodbye! Feel free to reach me."
  };

  const handleSend = () => {
    if (input.trim()) {
      const userText = input.trim().toLowerCase();
      setMessages(prev => [...prev, { sender: 'user', text: input }]);
      setInput('');

      const botResponse = predefinedAnswers[userText] || "Sorry, I didn't understand that. Can you ask something else?";
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }
  };

  const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging.current) {
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={iconRef}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 9999,
        cursor: 'move',
      }}
    >
      <button
        onMouseDown={handleMouseDown}
        onClick={toggleChat}
        style={{
          backgroundColor: 'rgba(224, 174, 7, 0.98)',
          color: 'white',
          border: '2px solid white',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '20px',
          boxShadow: '0 0 1rem rgba(104, 91, 18, 0.48)',
          cursor: 'pointer',
        }}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div
          style={{
            width: 300,
            height: 400,
            backgroundColor: 'rgb(243, 238, 172)',
            border: '2px solid #ccc',
            borderRadius: '10px',
            marginTop: 10,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 0 15px rgba(243, 238, 172, 0.3)'
          }}
        >
          <div style={{ overflowY: 'auto', flex: 1, marginBottom: 10 }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <input
              className="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                marginRight: '10px',
                backgroundColor: 'Gray',
                border: '1px solid black',
                color: 'black',
                borderRadius: '0.5rem'
              }}
            />
            <button style={{ backgroundColor: 'gray' }} onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
