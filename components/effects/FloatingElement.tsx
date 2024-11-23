"use client";

import { motion } from 'framer-motion';
import { floatingElements } from '@/lib/data';

interface FloatingElementProps {
  emoji: string;
  delay: number;
  duration: number;
  size: string;
}

export const FloatingElement = ({ emoji, delay, duration, size }: FloatingElementProps) => (
  <motion.div 
    className="absolute pointer-events-none"
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: 0.5,
      y: [-20, 0, -20],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      fontSize: size,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
    }}
  >
    {emoji}
  </motion.div>
);

export default FloatingElement;