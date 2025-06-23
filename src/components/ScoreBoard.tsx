import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Target, Zap } from 'lucide-react';

interface ScoreBoardProps {
  correct: number;
  incorrect: number;
  streak: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  correct,
  incorrect,
  streak,
  currentQuestion,
  totalQuestions
}) => {
  const total = correct + incorrect;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <motion.div
        className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 border-3 border-green-400"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-green-800 font-black text-2xl">{correct}</div>
            <div className="text-green-600 text-sm font-bold">Doğru</div>
          </div>
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-4 border-3 border-red-400"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-red-800 font-black text-2xl">{incorrect}</div>
            <div className="text-red-600 text-sm font-bold">Yanlış</div>
          </div>
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 border-3 border-purple-400"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-purple-800 font-black text-2xl">{accuracy}%</div>
            <div className="text-purple-600 text-sm font-bold">Başarı</div>
          </div>
          <Target className="w-8 h-8 text-purple-500" />
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-4 border-3 border-yellow-400"
        whileHover={{ scale: 1.05 }}
        animate={streak > 2 ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 1, repeat: streak > 2 ? Infinity : 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-yellow-800 font-black text-2xl">{streak}</div>
            <div className="text-yellow-600 text-sm font-bold">Seri</div>
          </div>
          <Zap className="w-8 h-8 text-yellow-500" />
        </div>
      </motion.div>
    </div>
  );
};