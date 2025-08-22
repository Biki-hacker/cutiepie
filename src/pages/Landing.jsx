import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Message = ({ text, isUser = false, onButtonClick, buttonText, showButton = false }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 px-2 sm:px-4`}>
    <div 
      className={`max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] rounded-lg px-4 py-2 ${
        isUser ? 'bg-green-100' : 'bg-white'
      } shadow-lg transition-all duration-200`}
      style={{
        animation: 'fadeIn 0.3s ease-in-out',
        borderTopLeftRadius: isUser ? '1.5rem' : '0.5rem',
        borderTopRightRadius: isUser ? '0.5rem' : '1.5rem',
      }}
    >
      <p className="text-gray-800 text-sm sm:text-base whitespace-pre-line leading-relaxed">
        {text}
      </p>
      {showButton && buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm sm:text-base font-medium transition-colors transform hover:scale-105 active:scale-95"
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

const Landing = () => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // First message appears immediately
    const firstMessage = { text: 'A like B\nC like D\nE like F\nG like H\nBut I don\'t like J!', isUser: false };
    
    // Set first message
    const firstTimer = setTimeout(() => {
      setMessages([firstMessage]);
      
      // Set second message with delay
      const secondTimer = setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: 'Why?', isUser: true, showButton: true, buttonText: 'Press - Why?' }
        ]);
      }, 600); // 0.75 second delay after first message
      
      return () => clearTimeout(secondTimer);
    }, 300); // Initial delay of 0.25 seconds
    
    return () => clearTimeout(firstTimer);
  }, []);

  const handleButtonClick = () => {
    if (currentStep === 0) {
      // After first button click
      setMessages(prev => [
        ...prev,
        { text: 'Because, I like U 🥰', isUser: false },
        { text: 'Can I ask you something?', isUser: false, showButton: true, buttonText: 'Press - What?' }
      ]);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      // After second button click, navigate to Page1
      navigate('/page1');
    }
  };

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex w-64 flex-shrink-0 bg-gray-100 border-r border-gray-200 flex-col">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 font-bold text-2xl shadow-sm">
              😊
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-gray-800">Cutie Pie</h2>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* You can add chat list here if needed */}
        </div>
      </div>

      {/* Main Chat Area - Takes full remaining width */}
      <div className="flex-1 flex flex-col bg-white w-full min-w-0">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
            <div className="md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 font-bold text-xl mr-3">
              😊
            </div>
            <div>
              <h2 className="font-semibold text-lg">Special Message</h2>
              <p className="text-xs text-green-100">Online</p>
            </div>
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div 
          className="flex-1 p-2 sm:p-4 overflow-y-auto bg-gray-50" 
          style={{ 
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABFElEQVR4nO3XMQ6CQBRF0QcWxM7W2tLKwj/4JQv/wMLK2tqVJq6AiYVJZkISZt7kFJPMvHkDAAAAAAAAAAAAAAAAAAAAAAAAPqOq9iY5JnlU1W2S0zTNj9G5VrXW2iS5JNlX1Xl0ntXUWu9JjkkOo7OsrqoOSU6jc6xqmqZ7VZ2T3EbH+E3TNO1GZ1jTNE2Pqjol+Rqd5TdU1THJdXSONbXW7kmOSW6js/xvrbV9knOSY5L76Dxr6r1fq+qU5Dg6y5p67/ckxySX0VnW1Hu/JTkkuY7O8pOqOiS5jM7xXZLn6BAAAAAAAAAAAAAAAAAAAAAAAAAAAPh3vwD0Yz5xGtQ3qQAAAABJRU5ErkJggg==")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px',
            opacity: 0.9
          }}
        >
          <div className="w-full px-2 sm:px-4">
            {messages.map((msg, index) => (
              <Message
                key={index}
                text={msg.text}
                isUser={msg.isUser}
                onButtonClick={handleButtonClick}
                buttonText={msg.buttonText}
                showButton={msg.showButton && index === messages.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-gray-50 p-3 sm:p-4 border-t border-gray-200 sticky bottom-0">
          <div className="w-full px-2 sm:px-4">
            <div className="flex items-center">
              <div className="flex-1 bg-white rounded-full px-3 py-2 flex items-center shadow-sm border border-gray-200">
                <span className="text-gray-500 text-lg mr-2 hover:text-gray-600 cursor-pointer">😊</span>
                <input
                  type="text"
                  className="flex-1 outline-none text-gray-700 text-sm sm:text-base bg-transparent"
                  placeholder="Type a message"
                  disabled
                />
                <span className="text-gray-400 ml-2 hover:text-gray-500 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <button className="ml-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-3 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
