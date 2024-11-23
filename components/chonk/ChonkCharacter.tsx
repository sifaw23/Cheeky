"use client";

import { motion } from 'framer-motion';
import { ChonkMood } from '@/lib/data';
import { chonkFaces } from '@/lib/data';

interface ChonkCharacterProps {
  mood: ChonkMood;
  size: number;
  treatCount: number;
  onFeed: () => void;
}

export const ChonkCharacter = ({ 
  mood, size, treatCount, onFeed 
}: ChonkCharacterProps) => (
  <motion.div 
    className="max-w-xs mx-auto"
    style={{ scale: size }}
    whileHover={{ scale: size * 1.1 }}
    whileTap={{ scale: size * 0.95 }}
  >
    <motion.div 
      className="bg-white rounded-full p-8 shadow-lg text-center cursor-pointer"
      animate={{ 
        y: [0, -10, 0],
        rotate: mood === 'dancing' ? [0, 10, -10, 0] : [0, 2, -2, 0]
      }}
      transition={{ 
        duration: mood === 'dancing' ? 0.5 : 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={onFeed}
    >
      <div className="text-6xl font-mono mb-4">
        {chonkFaces[mood]}
      </div>
      <div className="text-2xl font-bold text-purple-600">
        Cheeky Chonk
      </div>
      {treatCount > 0 && (
        <div className="text-sm text-purple-400 mt-2">
          Treats consumed: {treatCount} 🍪
        </div>
      )}
    </motion.div>
  </motion.div>
);

export default ChonkCharacter;