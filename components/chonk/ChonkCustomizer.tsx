"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Crown, Sparkles } from 'lucide-react';

interface CustomizationOption {
  type: 'accessory' | 'color' | 'effect';
  name: string;
  icon: JSX.Element;
  options: string[];
}

const customizationOptions: CustomizationOption[] = [
  {
    type: 'accessory',
    name: 'Accessories',
    icon: <Crown className="w-5 h-5" />,
    options: ['👑', '🎀', '🎩', '🕶️', '🪄', '🌈']
  },
  {
    type: 'color',
    name: 'Colors',
    icon: <Palette className="w-5 h-5" />,
    options: ['bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400']
  },
  {
    type: 'effect',
    name: 'Effects',
    icon: <Sparkles className="w-5 h-5" />,
    options: ['bounce', 'shake', 'spin', 'pulse', 'wobble']
  }
];

interface ChonkCustomizerProps {
  onCustomizationChange: (customization: {
    accessory: string;
    color: string;
    effect: string;
  }) => void;
}

export default function ChonkCustomizer({ onCustomizationChange }: ChonkCustomizerProps) {
  const [selectedAccessory, setSelectedAccessory] = useState('');
  const [selectedColor, setSelectedColor] = useState('bg-purple-400');
  const [selectedEffect, setSelectedEffect] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (type: string, option: string) => {
    switch (type) {
      case 'accessory':
        setSelectedAccessory(option);
        break;
      case 'color':
        setSelectedColor(option);
        break;
      case 'effect':
        setSelectedEffect(option);
        break;
    }

    onCustomizationChange({
      accessory: type === 'accessory' ? option : selectedAccessory,
      color: type === 'color' ? option : selectedColor,
      effect: type === 'effect' ? option : selectedEffect
    });
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50"
      animate={{ y: isOpen ? 0 : 200 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -top-12 left-0 px-4 py-2 bg-white rounded-full shadow-lg"
      >
        <Palette className="w-6 h-6 text-purple-600" />
      </button>

      <div className="bg-white rounded-xl p-4 shadow-lg">
        <h3 className="text-lg font-bold text-purple-600 mb-4">
          Customize Your Chonk
        </h3>

        {customizationOptions.map((category) => (
          <div key={category.type} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              {category.icon}
              <span className="text-sm font-medium text-purple-600">
                {category.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.options.map((option, i) => (
                <motion.button
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${category.type === 'color' ? option : 'bg-gray-100'}
                    ${category.type === 'color' && option === selectedColor ? 'ring-2 ring-purple-600' : ''}
                    ${category.type !== 'color' && option === 
                      (category.type === 'accessory' ? selectedAccessory : selectedEffect) 
                      ? 'bg-purple-100' : ''
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSelection(category.type, option)}
                >
                  {category.type === 'accessory' ? option : ''}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}