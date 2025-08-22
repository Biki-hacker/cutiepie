import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import ConfettiEffect from '../components/Animations/ConfettiEffect';

export default function FinalPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the yay sound when the component mounts
    const audio = new Audio('/yay.mp3');
    audioRef.current = audio;
    audio.play().catch(error => console.log('Audio play failed:', error));
    
    // Show first message after a short delay
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    // Show final message after another delay
    const timer2 = setTimeout(() => setShowFinalMessage(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      // Clean up audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <PageWrapper>
      <>
        {showConfetti && <ConfettiEffect />}
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
          YAY! I KNEW IT! 🎉
        </h1>
      </>
      
      <img 
        src="/final.gif" 
        alt="Celebration animation" 
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
      />
      
      {showMessage && (
        <div className="space-y-4 mb-8">
          <p className="text-xl text-pink-700">
            You've made me the happiest person in the world! 
          </p>
          
          {showFinalMessage && (
            <div className="mt-6 space-y-4">
            </div>
          )}
        </div>
      )}
    </PageWrapper>
  );
}
