"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieClicker() {
  const [cookies, setCookies] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const handleClick = () => {
    setCookies(prev => prev + multiplier);
  };

  const buyMultiplier = () => {
    if (cookies >= 100) {
      setCookies(prev => prev - 100);
      setMultiplier(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 flex flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold text-white mb-8">🍪 Cookie Clicker 🍪</div>

      <div className="text-2xl text-white mb-4">Cookies: {cookies}</div>
      <div className="text-xl text-white mb-8">Multiplier: x{multiplier}</div>

      <motion.button
        className="bg-white rounded-full p-8 shadow-lg mb-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <Cookie className="w-16 h-16 text-purple-600" />
      </motion.button>

      <button
        className={`px-6 py-3 rounded-full font-bold ${
          cookies >= 100 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-400 text-gray-200'
        }`}
        onClick={buyMultiplier}
        disabled={cookies < 100}
      >
        Buy Multiplier (100 cookies)
      </button>
    </div>
  );
}