import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Heart, Star, Zap, CheckCircle, XCircle } from 'lucide-react';

interface AIAssistantProps {
  mood: 'neutral' | 'happy' | 'encouraging' | 'excited';
  message: string;
  isCorrect?: boolean | null;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ mood, message, isCorrect }) => {
  const getMoodColor = () => {
    switch (mood) {
      case 'happy': return 'from-green-400 to-emerald-500';
      case 'encouraging': return 'from-blue-400 to-cyan-500';
      case 'excited': return 'from-purple-400 to-pink-500';
      default: return 'from-indigo-400 to-purple-500';
    }
  };

  const getMoodIcon = () => {
    switch (mood) {
      case 'happy': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'encouraging': return <Heart className="w-4 h-4 text-red-500" />;
      case 'excited': return <Star className="w-4 h-4 text-yellow-500" />;
      default: return <Zap className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getResultIcon = () => {
    if (isCorrect === true) return <CheckCircle className="w-5 h-5 text-green-500 absolute -top-1 -right-1" />;
    if (isCorrect === false) return <XCircle className="w-5 h-5 text-red-500 absolute -top-1 -right-1" />;
    return null;
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <motion.div
          className={`bg-gradient-to-br ${getMoodColor()} p-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20`}
          animate={{
            scale: mood === 'excited' ? [1, 1.05, 1] : 1,
            rotate: mood === 'happy' ? [0, -2, 2, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: mood === 'excited' ? Infinity : 0,
            repeatType: 'reverse'
          }}
        >
          <div className="relative">
            <Bot className="w-8 h-8 text-white mb-2" />
            {getResultIcon()}
          </div>
          
          <div className="text-white text-sm font-medium max-w-48">
            {message}
          </div>
          
          <div className="flex items-center justify-between mt-2">
            {getMoodIcon()}
            <div className="text-white/80 text-xs">AI Asistan</div>
          </div>
        </motion.div>
        
        {/* Speech bubble tail */}
        <div className={`absolute -bottom-2 right-4 w-4 h-4 bg-gradient-to-br ${getMoodColor()} transform rotate-45`}></div>
      </div>
    </motion.div>
  );
};