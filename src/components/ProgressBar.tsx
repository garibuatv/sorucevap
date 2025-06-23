import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-gray-600">İlerleme</span>
        <span className="text-sm font-bold text-gray-800">
          {current} / {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-gray-800 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between mt-1">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < current ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};