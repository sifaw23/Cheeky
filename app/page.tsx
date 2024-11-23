"use client";

import { useState, useEffect } from 'react';
import { Rocket, PartyPopper, Heart, Stars, Pizza, Cat, Cookie, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tornado from '@/components/background/Tornado';
import FloatingElement from '@/components/effects/FloatingElement';
import ChonkCharacter from '@/components/chonk/ChonkCharacter';
import GameCard from '@/components/games/GameCard';
import { floatingElements, chonkQuotes, ChonkMood } from '@/lib/data';

export default function Home() {
  const [chonkMood, setChonkMood] = useState<ChonkMood>('happy');
  const [rocketFuel, setRocketFuel] = useState(80);
  const [holders, setHolders] = useState(12548);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [chonkSize, setChonkSize] = useState(1);
  const [treatCount, setTreatCount] = useState(0);
  const [lastClickPos, setLastClickPos] = useState({ x: 0, y: 0 });
  const [danceMoves, setDanceMoves] = useState(0);

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

  const games = [
    { 
      emoji: "🎮",
      title: "Chonk Jump",
      description: "Help Chonk jump over obstacles!",
      href: "/games/chonk-jump"
    },
    { 
      emoji: "🍪",
      title: "Cookie Clicker",
      description: "Click cookies to feed the Chonk!",
      href: "/games/cookie-clicker"
    },
    { 
      emoji: "🎨",
      title: "Meme Factory",
      description: "Create and share your dankest Chonk memes!",
      href: "/games/meme-factory"
    }
  ];

  const stats = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-yellow-200 relative overflow-hidden">
      <Tornado />

      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((el, i) => (
          <FloatingElement key={i} {...el} />
        ))}
      </div>

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

      <div className="container mx-auto px-4 pt-8 relative z-10">
        <motion.div 
          className="relative max-w-md mx-auto mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="bg-white rounded-2xl p-4 text-center relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
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

        <ChonkCharacter
          mood={chonkMood}
          size={chonkSize}
          treatCount={treatCount}
          onFeed={feedChonk}
                  />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
                    {stats.map((stat, index) => (
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

                  <motion.div 
                    className="grid md:grid-cols-3 gap-6 mt-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {games.map((game, index) => (
                      <GameCard key={index} {...game} />
                    ))}
                  </motion.div>

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
          }