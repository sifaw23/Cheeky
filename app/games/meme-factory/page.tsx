"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { chonkFaces } from '@/lib/data';

export default function MemeFactory() {
  const [selectedChonk, setSelectedChonk] = useState(Object.values(chonkFaces)[0]);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('bg-purple-400');
  const [fontSize, setFontSize] = useState('text-4xl');

  const colors = [
    'bg-purple-400',
    'bg-pink-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-red-400'
  ];

  const fontSizes = [
    { name: 'Small', value: 'text-2xl' },
    { name: 'Medium', value: 'text-4xl' },
    { name: 'Large', value: 'text-6xl' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🎨 Chonk Meme Factory 🎨
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Meme Preview */}
          <motion.div
            className={`${backgroundColor} p-8 rounded-xl shadow-lg aspect-square flex flex-col items-center justify-between`}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className={`${fontSize} font-bold text-white text-center`}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              {topText}
            </motion.div>

            <div className="text-6xl">
              {selectedChonk}
            </div>

            <motion.div
              className={`${fontSize} font-bold text-white text-center`}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              {bottomText}
            </motion.div>
          </motion.div>

          {/* Controls */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Choose Your Chonk
              </label>
              <div className="grid grid-cols-4 gap-2">
                {Object.values(chonkFaces).map((face, index) => (
                  <motion.button
                    key={index}
                    className={`p-2 rounded-lg ${
                      selectedChonk === face ? 'bg-purple-100' : 'bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedChonk(face)}
                  >
                    {face}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Top Text
              </label>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter top text..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Bottom Text
              </label>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter bottom text..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Background Color
              </label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <motion.button
                    key={color}
                    className={`w-8 h-8 rounded-full ${color} ${
                      backgroundColor === color ? 'ring-2 ring-purple-600' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setBackgroundColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Font Size
              </label>
              <div className="flex gap-2">
                {fontSizes.map((size) => (
                  <button
                    key={size.value}
                    className={`px-4 py-2 rounded-lg ${
                      fontSize === size.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-purple-600'
                    }`}
                    onClick={() => setFontSize(size.value)}
                                      >
                                        {size.name}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                <motion.button
                                  className="w-full py-3 bg-purple-600 text-white rounded-lg font-bold"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    // Here you could add functionality to save or share the meme
                                    alert('Meme created! (Add save/share functionality)');
                                  }}
                                >
                                  Generate Meme! 🎉
                                </motion.button>
                              </div>
                            </div>

                            {/* Recently Created Memes */}
                            <div className="mt-12">
                              <h2 className="text-2xl font-bold text-white mb-6">Recent Memes</h2>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[...Array(3)].map((_, i) => (
                                  <div 
                                    key={i}
                                    className="bg-white rounded-xl p-4 shadow-lg opacity-50 hover:opacity-100 transition-opacity"
                                  >
                                    <div className="text-center text-gray-500">
                                      Example Meme #{i + 1}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tips */}
                            <div className="mt-12 bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                              <h3 className="text-xl font-bold text-white mb-4">Pro Tips 💡</h3>
                              <ul className="text-white space-y-2">
                                <li>• Keep text short and punchy for better memes</li>
                                <li>• Try different color combinations</li>
                                <li>• Match the Chonk face with your message</li>
                                <li>• Share your creations with other Chonk lovers!</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    }