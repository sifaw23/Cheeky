"use client";

import { motion } from 'framer-motion';

export const Tornado = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute w-40 h-96 left-1/2 bottom-0"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-full bg-white/10"
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              transform: `translateY(-${i * 40}px)`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Tornado;