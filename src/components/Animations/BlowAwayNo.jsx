import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlowAwayNo = ({ onComplete }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveAway = () => {
      setPosition({
        x: Math.random() > 0.5 ? 1000 : -1000,
        y: Math.random() * 400 - 200,
      });
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500);
    };

    moveAway();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute"
    >
      <NoButton>No</NoButton>
    </motion.div>
  );
};

export default BlowAwayNo;
