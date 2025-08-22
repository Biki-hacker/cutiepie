import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShuffleCups = ({ onResult }) => {
  const [revealed, setRevealed] = useState(Array(3).fill(false));
  const [currentCups, setCurrentCups] = useState(['Yes', 'No', '']);
  const [selectedCup, setSelectedCup] = useState(null);
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

  const handleCupClick = (index) => {
    if (revealed[index]) return;
    
    // Lock all other cups by marking them as revealed
    const newRevealed = revealed.map((_, i) => i === index || revealed[i]);
    setRevealed(newRevealed);
    setSelectedCup(index);
    setShowActionButtons(true);
  };

  const handleProceed = () => {
    if (selectedCup !== null) {
      const result = currentCups[selectedCup];
      if (result === 'Yes' || result === 'No') {
        onResult(result);
      }
    }
  };

  const reshuffle = useCallback(() => {
    const options = ['Yes', 'No', ''];
    setCurrentCups([...options].sort(() => Math.random() - 0.5));
    setRevealed(Array(3).fill(false));
    setSelectedCup(null);
    setShowActionButtons(false);
    setIsShuffled(true);
  }, []);

  // Animation variants for the cup reveal
  const cupVariants = {
    initial: { scale: 1 },
    clicked: { 
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 }
    },
    hover: { scale: 1.05 }
  };

  const getResultMessage = () => {
    if (selectedCup === null) return '';
    const result = currentCups[selectedCup];
    if (result === 'Yes') return 'You found "Yes"! Will you accept this outcome?';
    if (result === 'No') return 'You found "No"! Do you want to try again or continue?';
    return 'Empty! Would you like to try again?';
  };

  const getInitialMessage = () => {
    if (!isShuffled) return 'Click the Reshuffle button to start the game!';
    return 'Click on a cup to reveal the result';
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 
                      flex items-center justify-center shadow-lg
                      ${revealed[index] 
                        ? 'border-pink-400 bg-pink-100' 
                        : 'border-pink-300 bg-pink-50 hover:scale-105'}
                      ${isShuffled && !revealed.some(r => r) ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}`}
            onClick={() => isShuffled && !revealed.some(r => r) && handleCupClick(index)}
            variants={cupVariants}
            initial="initial"
            animate={revealed[index] ? 'clicked' : 'initial'}
            whileHover={(!revealed[index] && isShuffled) ? 'hover' : {}}
          >
            <AnimatePresence>
              {revealed[index] ? (
                <motion.span 
                  className="text-2xl font-bold text-pink-600"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  {currentCups[index] || 'Empty'}
                </motion.span>
              ) : (
                <motion.div 
                  className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center"
                  initial={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {!isShuffled && (
                    <span className="text-2xl font-bold text-pink-600">
                      {currentCups[index] || 'Empty'}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {/* Instruction Text */}
      <motion.p className="text-lg font-medium text-pink-600 text-center mb-4">
        {getInitialMessage()}
      </motion.p>
      
      {/* Action Buttons */}
      <AnimatePresence>
        {showActionButtons ? (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.p className="text-lg font-medium text-pink-600 mb-4 sm:mb-0 text-center">
              {getResultMessage()}
            </motion.p>
            <div className="flex gap-4">
              {currentCups[selectedCup] !== '' && (
                <motion.button
                  onClick={handleProceed}
                  className="px-6 py-2 bg-green-500 text-white rounded-full font-medium shadow-md
                          hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentCups[selectedCup] === 'Yes' ? 'Accept' : 'Continue'}
                </motion.button>
              )}
              <motion.button
                onClick={reshuffle}
                className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium shadow-md
                        hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {!isShuffled ? 'Shuffle' : currentCups[selectedCup] === '' ? 'Try Again' : 'Reshuffle'}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="reshuffle-button"
            onClick={reshuffle}
            className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium shadow-md
                     hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Reshuffle
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShuffleCups;
