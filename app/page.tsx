"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, PartyPopper, Heart, Stars } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingElementProps {
  emoji: string;
  delay: number;
  duration: number;
  size: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ emoji, delay, duration, size }) => (
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

const Tornado: React.FC = () => {
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

const ChonkLanding: React.FC = () => {
  const [chonkMood, setChonkMood] = useState('happy');
  const [rocketFuel, setRocketFuel] = useState(80);
  const [holders, setHolders] = useState(12548);
  const [isPartyMode, setIsPartyMode] = useState(false);

  useEffect(() => {
    const moods = ['happy', 'excited', 'silly', 'loving'];
    const interval = setInterval(() => {
      setChonkMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ChonkFace = () => {
    switch(chonkMood) {
      case 'happy':
        return "( ◕‿◕ )";
      case 'excited':
        return "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
      case 'silly':
        return "(づ｡◕‿‿◕｡)づ";
      case 'loving':
        return "(♡°▽°♡)";
      default:
        return "( ◕‿◕ )";
    }
  };

  const floatingElements = [
    { emoji: "🌟", delay: 0, duration: 6, size: "24px" },
    { emoji: "🚀", delay: 1, duration: 8, size: "32px" },
    { emoji: "🌈", delay: 2, duration: 7, size: "28px" },
    { emoji: "✨", delay: 3, duration: 5, size: "20px" },
    { emoji: "🎈", delay: 4, duration: 9, size: "30px" },
    { emoji: "🎉", delay: 5, duration: 7, size: "26px" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-yellow-200 relative overflow-hidden">
      {/* Background Effects */}
      <Tornado />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((el, i) => (
          <FloatingElement key={i} {...el} />
        ))}
      </div>

      {/* Party Mode Sparkles */}
      <AnimatePresence>
        {isPartyMode && (
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        {/* Chonk's Speech Bubble */}
        <motion.div 
          className="relative max-w-md mx-auto mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-4 text-center relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                          w-4 h-4 bg-white rotate-45"></div>
            <motion.p 
              key={chonkMood}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-purple-600"
            >
              {chonkMood === 'happy' && "Heya friendo! Ready to have some fun? 🎉"}
              {chonkMood === 'excited' && "WOOHOO! Let's party! 🚀"}
              {chonkMood === 'silly' && "Did someone say TREATS?! 🍪"}
              {chonkMood === 'loving' && "You're breathtaking! 💖"}
            </motion.p>
          </div>
        </motion.div>

        {/* Chonk Character */}
        <motion.div 
          className="max-w-xs mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="bg-white rounded-full p-8 shadow-lg text-center"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-6xl font-mono mb-4">
              <ChonkFace />
            </div>
            <div className="text-2xl font-bold text-purple-600">
              Cheeky Chonk
            </div>
          </motion.div>
        </motion.div>

        {/* Rocket Fuel Meter */}
        <motion.div 
          className="max-w-md mx-auto mt-8 bg-white rounded-full p-4 shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-2">
            <span className="text-lg font-bold text-purple-600">Rocket Fuel Loading!</span>
          </div>
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${rocketFuel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="text-center mt-2 text-purple-600 font-bold">
            {rocketFuel}% Ready to Party!
          </div>
        </motion.div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
          <motion.div 
            className="bg-white rounded-xl p-4 text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="text-2xl font-bold text-purple-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {holders.toLocaleString()}
            </motion.div>
            <div className="text-sm text-purple-400">
              Frens in the Party! 🎉
            </div>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-4 text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="text-2xl font-bold text-purple-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              543
            </motion.div>
            <div className="text-sm text-purple-400">
              High Fives Today! 🙌
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-md mx-auto">
          <motion.button 
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full 
                     font-bold text-lg shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-6 h-6" />
            Join the Fun!
          </motion.button>
          <motion.button 
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full 
                     font-bold text-lg shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PartyPopper className="w-6 h-6" />
            Get $CHONK
          </motion.button>
        </div>

        {/* Fun Features */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { emoji: "🎮", title: "Play & Earn", desc: "Join daily mini-games and win $CHONK prizes!" },
            { emoji: "🎨", title: "Meme Contest", desc: "Create funny memes with Cheeky Chonk!" },
            { emoji: "🎁", title: "Daily Surprises", desc: "Chonk loves surprising his frens!" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">{feature.title}</h3>
              <p className="text-purple-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="text-center py-8 mt-16">
          <motion.p 
            className="text-purple-600 font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with <Heart className="w-4 h-4 inline" /> by Cheeky Chonk & Frens
          </motion.p>
        </footer>
      </div>

      {/* Party Mode Toggle */}
      <motion.button
        onClick={() => setIsPartyMode(!isPartyMode)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                 text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPartyMode ? "Calm Down" : "Party Time!"}
      </motion.button>
    </div>
  );
};

export default ChonkLanding;