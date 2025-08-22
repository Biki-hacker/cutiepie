import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import NoButton from '../components/Buttons/NoButton';

export default function Page5() {
  const [showNoButton, setShowNoButton] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showYesButtons, setShowYesButtons] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-trigger the explosion sequence after a short delay
    const timer = setTimeout(() => {
      setShowNoButton(false);
      setShowExplosion(true);
      
      // Show the Yes buttons after explosion animation completes
      setTimeout(() => {
        setShowExplosion(false);
        setShowYesButtons(true);
      }, 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Create explosion particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    size: Math.random() * 20 + 5,
    rotation: Math.random() * 360,
  }));

  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center">
        You've left me no choice! 💥
      </h1>
      
      {/* Angry Character GIF Placeholder */}
      <img 
        src="/page5.gif" 
        alt="Angry animation" 
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-10 object-cover"
      />
      
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <AnimatePresence>
          {showNoButton && (
            <motion.div
              key="no-button"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NoButton>No</NoButton>
            </motion.div>
          )}
          
          {showExplosion && (
            <motion.div 
              className="absolute"
              initial={{ scale: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute bg-red-500 rounded-full"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    x: particle.x,
                    y: particle.y,
                    rotate: particle.rotation,
                  }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    opacity: 0,
                    scale: 0,
                    x: particle.x * 2,
                    y: particle.y * 2,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
          
          {showYesButtons && (
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                to="/final" 
                className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-lg text-white font-medium shadow-md mx-2 text-sm sm:text-base transition-colors"
              >
                Yes...
              </Link>
              <Link 
                to="/final" 
                className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-lg text-white font-medium shadow-md mx-2 text-sm sm:text-base transition-colors"
              >
                Yes...
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
