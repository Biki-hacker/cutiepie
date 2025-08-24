import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import NoButton from '../components/Buttons/NoButton';

export default function Page5() {
  const [showNoButton, setShowNoButton] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showYesButtons, setShowYesButtons] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
        You've left me <button onClick={() => setShowModal(true)} className="inline p-0 m-0 border-0 bg-transparent font-bold text-pink-600 cursor-pointer hover:no-underline hover:bg-transparent text-2xl md:text-3xl">no</button> choice! 💥
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

      {/* Clever Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="text-gray-800 text-center mb-6">
              You're really clever... clever enough to realize we'd be the perfect couple, right?😉
            </p>
            
            <div className="flex justify-center mb-6">
              <img 
                src="/clever.gif" 
                alt="Clever animation" 
                className="max-w-full max-h-96 object-contain rounded-lg"
              />
            </div>
            
            <p className="text-gray-700 text-center mb-6">
              Then, baby, just choose my hand 🥰
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/final')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-full transition-colors"
              >
                Okay..🤭
              </button>
            </div>
            
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
