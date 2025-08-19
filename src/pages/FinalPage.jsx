import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import ConfettiEffect from '../components/Animations/ConfettiEffect';

export default function FinalPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    // Show first message after a short delay
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    // Show final message after another delay
    const timer2 = setTimeout(() => setShowFinalMessage(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
      
      <div className="w-48 h-48 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
        💖
      </div>
      
      {showMessage && (
        <div className="space-y-4 mb-8">
          <p className="text-xl text-pink-700">
            You've made me the happiest person in the world! 
          </p>
          
          {showFinalMessage && (
            <div className="mt-6 space-y-4">
              <p className="text-lg">
                I promise to make you smile every single day! ✨
              </p>
              <div className="text-sm text-gray-500 mt-8">
                <p>P.S. You can't take it back now! 😘</p>
                <div className="mt-4">
                  <Link 
                    to="/" 
                    className="inline-block bg-white bg-opacity-70 hover:bg-opacity-100 px-4 py-2 rounded-lg shadow-md transition-all"
                  >
                    Start Over
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </PageWrapper>
  );
}
