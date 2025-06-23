import { useEffect } from 'react';

interface UseKeyboardProps {
  onPrevious: () => void;
  onNext: () => void;
  onShowHint: () => void;
  onAnswer: (answer: number | boolean) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  questionType: string;
  optionsCount?: number;
}

export const useKeyboard = ({
  onPrevious,
  onNext,
  onShowHint,
  onAnswer,
  canGoPrevious,
  canGoNext,
  questionType,
  optionsCount = 0
}: UseKeyboardProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Navigation
      if (event.key === 'ArrowLeft' && canGoPrevious) {
        onPrevious();
      } else if (event.key === 'ArrowRight' && canGoNext) {
        onNext();
      } else if (event.key === 'h' || event.key === 'H') {
        onShowHint();
      }

      // Answer shortcuts
      if (questionType === 'multiple-choice') {
        const num = parseInt(event.key);
        if (num >= 1 && num <= optionsCount) {
          onAnswer(num - 1);
        }
      } else if (questionType === 'true-false') {
        if (event.key === 't' || event.key === 'T') {
          onAnswer(true);
        } else if (event.key === 'f' || event.key === 'F') {
          onAnswer(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onPrevious, onNext, onShowHint, onAnswer, canGoPrevious, canGoNext, questionType, optionsCount]);
};