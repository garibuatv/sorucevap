import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: number | boolean | boolean[]) => void;
  showHint: boolean;
  showAnswer: boolean;
  userAnswer?: number | boolean | boolean[] | null;
  isAnswered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  showHint,
  showAnswer,
  userAnswer,
  isAnswered
}) => {
  const [multiAnswers, setMultiAnswers] = useState<boolean[]>([]);

  const handleAnswer = (answer: number | boolean | boolean[]) => {
    onAnswer(answer);
  };

  const handleMultiAnswer = (index: number, value: boolean) => {
    const newAnswers = [...multiAnswers];
    newAnswers[index] = value;
    setMultiAnswers(newAnswers);
    onAnswer(newAnswers);
  };

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {(question as any).options.map((option: string, index: number) => (
        <motion.button
          key={index}
          onClick={() => handleAnswer(index)}
          disabled={isAnswered}
          className={`w-full p-4 text-left rounded-xl border-3 border-gray-800 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 ${
            isAnswered && (question as any).correctAnswer === index
              ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
              : isAnswered && userAnswer === index && (question as any).correctAnswer !== index
              ? 'bg-gradient-to-r from-red-100 to-rose-100 border-red-500'
              : ''
          }`}
          whileHover={{ scale: isAnswered ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">{option}</span>
            {isAnswered && (question as any).correctAnswer === index && (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            )}
            {isAnswered && userAnswer === index && (question as any).correctAnswer !== index && (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );

  const renderTrueFalse = () => (
    <div className="flex gap-4 justify-center">
      <motion.button
        onClick={() => handleAnswer(true)}
        disabled={isAnswered}
        className={`px-8 py-4 rounded-xl border-3 border-gray-800 bg-white font-bold text-lg ${
          isAnswered && (question as any).correctAnswer === true
            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
            : isAnswered && userAnswer === true && (question as any).correctAnswer !== true
            ? 'bg-gradient-to-r from-red-100 to-rose-100 border-red-500'
            : 'hover:bg-green-50'
        }`}
        whileHover={{ scale: isAnswered ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        DOĞRU
      </motion.button>
      <motion.button
        onClick={() => handleAnswer(false)}
        disabled={isAnswered}
        className={`px-8 py-4 rounded-xl border-3 border-gray-800 bg-white font-bold text-lg ${
          isAnswered && (question as any).correctAnswer === false
            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
            : isAnswered && userAnswer === false && (question as any).correctAnswer !== false
            ? 'bg-gradient-to-r from-red-100 to-rose-100 border-red-500'
            : 'hover:bg-red-50'
        }`}
        whileHover={{ scale: isAnswered ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        YANLIŞ
      </motion.button>
    </div>
  );

  const renderCodeWriting = () => (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-xl p-4 border-3 border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-gray-800">Doğru Cevap:</span>
        </div>
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
          {(question as any).correctCode}
        </pre>
      </div>
    </div>
  );

  const renderCodeExplanation = () => (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-xl p-4 border-3 border-gray-800">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
          {(question as any).code}
        </pre>
      </div>
      {showAnswer && (
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 border-3 border-green-500">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="font-bold text-green-800">Açıklama:</span>
          </div>
          <p className="text-green-700">{(question as any).correctExplanation}</p>
        </div>
      )}
    </div>
  );

  const renderMultiTrueFalse = () => (
    <div className="space-y-3">
      {(question as any).statements.map((statement: any, index: number) => (
        <div key={index} className="bg-white rounded-xl p-4 border-3 border-gray-800">
          <p className="text-gray-800 mb-3 font-medium">{statement.text}</p>
          <div className="flex gap-3">
            <motion.button
              onClick={() => handleMultiAnswer(index, true)}
              className={`px-4 py-2 rounded-lg border-2 font-bold ${
                multiAnswers[index] === true && statement.correct
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : multiAnswers[index] === true && !statement.correct
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 border-gray-300 hover:bg-green-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              D
            </motion.button>
            <motion.button
              onClick={() => handleMultiAnswer(index, false)}
              className={`px-4 py-2 rounded-lg border-2 font-bold ${
                multiAnswers[index] === false && !statement.correct
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : multiAnswers[index] === false && statement.correct
                  ? 'bg-red-100 border-red-500 text-red-700'
                  : 'bg-gray-50 border-gray-300 hover:bg-red-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Y
            </motion.button>
            {multiAnswers[index] !== undefined && (
              <div className="flex items-center ml-2">
                {(multiAnswers[index] === true && statement.correct) || 
                 (multiAnswers[index] === false && !statement.correct) ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'multiple-choice':
        return renderMultipleChoice();
      case 'true-false':
        return renderTrueFalse();
      case 'code-writing':
        return renderCodeWriting();
      case 'code-explanation':
        return renderCodeExplanation();
      case 'multi-true-false':
        return renderMultiTrueFalse();
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Front of card */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border-4 border-gray-800 backdrop-blur-sm">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-gray-800 mb-4 leading-tight">
              {question.question}
            </h2>
          </div>

          {renderQuestionContent()}

          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-4 border-3 border-yellow-400"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <span className="font-bold text-yellow-800">İpucu:</span>
              </div>
              <p className="text-yellow-700 mt-1">{question.hint}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};