import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import YesButton from '../components/Buttons/YesButton';
import NoButton from '../components/Buttons/NoButton';

export default function Page4() {
  const navigate = useNavigate();
  // State for button position and visibility

  // Position state for the No button
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0, visible: false });

  // Get container dimensions and position
  const containerRef = useRef(null);
  
  // Random position generator
  useEffect(() => {
    if (!containerRef.current) return;
    
    const moveButton = () => {
      const container = containerRef.current;
      if (!container) return;
      
      // Get container dimensions and position
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      // Get button dimensions
      const buttonWidth = 120; // Approximate width of the button
      const buttonHeight = 48; // Approximate height of the button
      
      // Calculate safe area (accounting for button size and padding)
      const padding = 16;
      const maxX = (containerWidth - buttonWidth) / 2 - padding;
      const maxY = (containerHeight - buttonHeight) / 2 - padding;
      
      // Ensure we have valid dimensions
      if (maxX <= 0 || maxY <= 0) return;
      
      // Calculate random position within safe bounds
      const x = Math.random() * (maxX * 2) - maxX;
      const y = Math.random() * (maxY * 2) - maxY;
      
      // Make button visible at new position
      setButtonPosition({ x, y, visible: true });
      
      // Hide button after 1 second
      setTimeout(() => {
        setButtonPosition(prev => ({ ...prev, visible: false }));
      }, 400);
    };
    
    // Initial call
    moveButton();
    
    // Set up interval for movement
    const interval = setInterval(moveButton, 2000); // 2 second interval (1s visible, 1s hidden)
    
    // Clean up
    return () => clearInterval(interval);
  }, []);

  const handleNoClick = () => {
    navigate('/page5');
  };

  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center">
        You can't escape me 💨❤️
      </h1>
      
      {/* Character GIF Placeholder */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-10 
                  flex items-center justify-center text-4xl">
        🌬️
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto h-[60vh] flex justify-center items-center 
                 bg-white/50 rounded-xl shadow-lg overflow-hidden"
        style={{
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <YesButton 
        onClick={() => navigate('/final')} 
        className="z-10 relative"
        style={{
          position: 'relative',
          zIndex: 10,
          pointerEvents: buttonPosition.visible ? 'none' : 'auto'
        }}
      />
        <AnimatePresence>
          {buttonPosition.visible && (
            <motion.div
              key="no-button"
              className="absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: buttonPosition.x,
                y: buttonPosition.y,
                transition: { duration: 0.2 }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleNoClick}
            >
              <NoButton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
