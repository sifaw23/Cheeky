"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface GameCardProps {
  emoji: string;
  title: string;
  description: string;
  href: string;
}

export const GameCard = ({ emoji, title, description, href }: GameCardProps) => (
  <Link href={href}>
    <motion.div
      className="bg-white rounded-xl p-6 text-center shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-purple-600 mb-2">{title}</h3>
      <p className="text-purple-400">{description}</p>
    </motion.div>
  </Link>
);

export default GameCard;