"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ChonkJump() {
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const chonkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isJumping && !gameOver) {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping, gameOver]);

  const jump = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
    setScore(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 flex flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold text-white mb-8">🎮 Chonk Jump 🎮</div>

      <div className="text-2xl text-white mb-4">Score: {score}</div>

      <div className="relative w-full h-64 bg-white/20 rounded-xl overflow-hidden">
        <motion.div
          ref={chonkRef}
          className="absolute bottom-0 left-12"
          animate={{
            y: isJumping ? -100 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15
          }}
        >
          <div className="text-6xl">( ˵ ◕‿◕ ˵ )</div>
        </motion.div>
      </div>

      <button
        className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full font-bold"
        onClick={jump}
        disabled={isJumping || gameOver}
      >
        JUMP! (or press Space)
      </button>
    </div>
  );
}