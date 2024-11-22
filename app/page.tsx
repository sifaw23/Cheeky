"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, PartyPopper, Heart, Stars, Pizza, Cat, Cookie, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types and interfaces
type ChonkMood = 'happy' | 'excited' | 'silly' | 'loving' | 'stuffed' | 'dancing' | 'sleepy' | 'derp';

interface ChonkFaces {
  [K: string]: string;
}

interface ChonkQuotes {
  [K: string]: string[];
}

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
  const [chonkMood, setChonkMood] = useState<ChonkMood>('happy');
  const [rocketFuel, setRocketFuel] = useState(80);
  const [holders, setHolders] = useState(12548);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [chonkSize, setChonkSize] = useState(1);
  const [treatCount, setTreatCount] = useState(0);
  const [lastClickPos, setLastClickPos] = useState({ x: 0, y: 0 });
  const [danceMoves, setDanceMoves] = useState(0);

  const chonkFaces: ChonkFaces = {
    happy: "( ˵ ◕‿◕ ˵ )",
    excited: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    silly: "(づ｡◕‿‿◕｡)づ",
    loving: "(♡°▽°♡)",
    stuffed: "( ｡◕‿◕｡) ⋆｡°✩",
    dancing: "〜(◠‿◠〜)",
    sleepy: "(￣ρ￣)..zzZ",
    derp: "(◐ω◑ )",
  };

  const chonkQuotes: ChonkQuotes = {
    happy: ["When in doubt, zoom out! 🚀", "I'm not fat, I'm cultivating mass! 🌟"],
    excited: ["TREATS OR WE RIOT! (ノಠ益ಠ)ノ", "I've got 99 problems but snacks ain't one! 🍪"],
    silly: ["Instructions unclear, ate the instructions 🤷‍♂️", "I'm on a seafood diet. I see food, I eat it! 🍕"],
    loving: ["You're breathtaking! No, YOU'RE breathtaking! 💖", "Did someone order extra cuteness? 🎀"],
    stuffed: ["Food coma loading... 99% 😴", "I regret nothing! (except not eating more) 🍔"],
    dancing: ["Shake shake shake! Shake your chonky! 💃", "Dancing queen, young and... well-fed! 👑"],
    sleepy: ["5 more minutes... or 5 more snacks 😴", "Dreams are made of cheese... mmm cheese 🧀"],
    derp: ["Brain.exe has stopped working 🤪", "Who needs brain cells when you have treats? 🍬"]
  };

  const floatingElements = [
    { emoji: "🌟", delay: 0, duration: 6, size: "24px" },
    { emoji: "🚀", delay: 1, duration: 8, size: "32px" },
    { emoji: "🌈", delay: 2, duration: 7, size: "28px" },
    { emoji: "✨", delay: 3, duration: 5, size: "20px" },
    { emoji: "🎈", delay: 4, duration: 9, size: "30px" },
    { emoji: "🎉", delay: 5, duration: 7, size: "26px" },
  ];

  useEffect(() => {
    const eventInterval = setInterval(() => {
      const events: ChonkMood[] = ['sleepy', 'excited', 'derp', 'happy'];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setChonkMood(randomEvent);
    }, 8000);

    return () => clearInterval(eventInterval);
  }, []);

  const feedChonk = () => {
    setChonkSize(prev => Math.min(prev + 0.1, 1.5));
    setTreatCount(prev => prev + 1);
    setChonkMood('stuffed');
    setTimeout(() => setChonkMood('happy'), 2000);
  };

  const makeChonkDance = () => {
    setDanceMoves(prev => prev + 1);
    setChonkMood('dancing');
    setTimeout(() => setChonkMood('happy'), 3000);
  };

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
              {chonkQuotes[chonkMood][Math.floor(Math.random() * chonkQuotes[chonkMood].length)]}
            </motion.p>
          </div>
        </motion.div>

        {/* Interactive Chonk Character */}
        <motion.div 
          className="max-w-xs mx-auto"
          style={{ scale: chonkSize }}
          whileHover={{ scale: chonkSize * 1.1 }}
          whileTap={{ scale: chonkSize * 0.95 }}
        >
          <motion.div 
            className="bg-white rounded-full p-8 shadow-lg text-center cursor-pointer"
            animate={{ 
              y: [0, -10, 0],
              rotate: chonkMood === 'dancing' ? [0, 10, -10, 0] : [0, 2, -2, 0]
            }}
            transition={{ 
              duration: chonkMood === 'dancing' ? 0.5 : 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={feedChonk}
          >
            <div className="text-6xl font-mono mb-4">
              {chonkFaces[chonkMood]}
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

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {[
            { 
              icon: <PartyPopper className="w-6 h-6" />,
              value: holders.toLocaleString(),
              label: "Frens in the Party! 🎉"
            },
            {
              icon: <Cookie className="w-6 h-6" />,
              value: `${(treatCount * 420).toLocaleString()}`,
              label: "Calories Consumed 🍪"
            },
            {
              icon: <Music className="w-6 h-6" />,
              value: danceMoves,
              label: "Epic Dance Moves 💃"
            },
            {
              icon: <Cat className="w-6 h-6" />,
              value: `${Math.floor(chonkSize * 100)}%`,
              label: "Chonkiness Level 📈"
            }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <motion.div 
                className="text-2xl font-bold text-purple-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-purple-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8 max-w-md mx-auto">
          <motion.button 
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full 
                     font-bold text-lg shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={makeChonkDance}
          >
            <Music className="w-6 h-6" />
            Make Chonk Dance!
          </motion.button>
          <motion.button 
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full 
                     font-bold text-lg shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={feedChonk}
          >
            <Cookie className="w-6 h-6" />
            Feed $TREAT
          </motion.button>
        </div>

        {/* Fun Features */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {[
            { 
              emoji: "🎮",
              title: "Chonk Games",
              desc: "Play 'Chonk Jump' or 'Cookie Clicker' to earn $TREAT!" 
            },
            { 
              emoji: "🎨",
              title: "Meme Factory",
              desc: "Create and share your dankest Chonk memes! Weekly prizes!" 
            },
            { 
              emoji: "🏆",
              title: "Chonk League",
              desc: "Compete in daily challenges! Current mission: Get CHONKIER!"
            }
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
                        <div className="mt-2 text-purple-500 text-sm">
                          No Chonks were harmed in the making of this website 
                          (just slightly overfed) 🍪
                        </div>
                      </footer>
                    </div>

                    {/* Enhanced Party Mode Toggle */}
                    <motion.button
                      onClick={() => setIsPartyMode(!isPartyMode)}
                      className="fixed bottom-4 right-4 z-50 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 
                               text-white rounded-full shadow-lg font-bold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPartyMode ? "Too Much Party! 🥵" : "PARTY TIME! 🎉"}
                    </motion.button>
                  </div>
                );
              };

              export default ChonkLanding;