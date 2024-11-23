"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { chonkFaces } from '@/lib/data';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const emojis = Object.values(chonkFaces);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Create pairs of cards with Chonk emojis
    const gameEmojis = [...emojis.slice(0, 6), ...emojis.slice(0, 6)];
    const shuffled = gameEmojis
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(id)) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    setMoves(prev => prev + 1);

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      if (cards[firstId].emoji === cards[secondId].emoji) {
        // Match found
        setCards(prev => prev.map(card => 
          card.id === firstId || card.id === secondId
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(prev => prev + 1);
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Chonk Memory</h1>
          <div className="flex justify-center gap-8 text-white">
            <div>Moves: {moves}</div>
            <div>Matches: {matches}/6</div>
          </div>
          <button
            onClick={initializeGame}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full"
          >
            Reset Game
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {cards.map(card => (
            <motion.div
              key={card.id}
              className={`aspect-square bg-white rounded-xl cursor-pointer ${
                card.isMatched ? 'opacity-50' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotateY: card.isMatched || flippedCards.includes(card.id) ? 180 : 0
              }}
              onClick={() => !card.isMatched && handleCardClick(card.id)}
            >
              <div className="w-full h-full flex items-center justify-center text-4xl">
                {card.isMatched || flippedCards.includes(card.id)
                  ? card.emoji
                  : '❓'}
              </div>
            </motion.div>
          ))}
        </div>

        {matches === 6 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center mt-8 p-6 bg-white rounded-xl"
          >
            <h2 className="text-2xl font-bold text-purple-600 mb-2">
              🎉 You Won! 🎉
            </h2>
            <p className="text-purple-400">
              Completed in {moves} moves!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}