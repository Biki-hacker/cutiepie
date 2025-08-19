import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={true}
      numberOfPieces={200}
      gravity={0.2}
      colors={['#FFC0CB', '#FF69B4', '#FF1493', '#C71585', '#DB7093']}
      opacity={0.8}
    />
  );
};

export default ConfettiEffect;
