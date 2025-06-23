import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, Eye } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShowHint: () => void;
  onShowAnswer: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  showHint: boolean;
  showAnswer: boolean;
  isAnswered: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  onShowHint,
  onShowAnswer,
  canGoPrevious,
  canGoNext,
  showHint,
  showAnswer,
  isAnswered
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl border-3 font-bold transition-all ${
          canGoPrevious
            ? 'bg-white border-gray-800 text-gray-800 hover:bg-gray-50'
            : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
        }`}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-5 h-5" />
        Önceki
      </motion.button>

      <div className="flex gap-2">
        <motion.button
          onClick={onShowHint}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border-3 font-bold transition-all ${
            showHint
              ? 'bg-yellow-100 border-yellow-400 text-yellow-800'
              : 'bg-white border-gray-800 text-gray-800 hover:bg-yellow-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Lightbulb className="w-5 h-5" />
          İpucu
        </motion.button>

        <motion.button
          onClick={onShowAnswer}
          disabled={!isAnswered}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border-3 font-bold transition-all ${
            showAnswer
              ? 'bg-blue-100 border-blue-400 text-blue-800'
              : isAnswered
              ? 'bg-white border-gray-800 text-gray-800 hover:bg-blue-50'
              : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={isAnswered ? { scale: 1.05 } : {}}
          whileTap={isAnswered ? { scale: 0.95 } : {}}
        >
          <Eye className="w-5 h-5" />
          Cevap
        </motion.button>
      </div>

      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl border-3 font-bold transition-all ${
          canGoNext
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-600 text-white hover:from-purple-600 hover:to-pink-600'
            : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
        }`}
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
      >
        Sonraki
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};