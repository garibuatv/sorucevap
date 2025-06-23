export interface BaseQuestion {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'code-writing' | 'code-explanation' | 'multi-true-false';
  question: string;
  hint: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: number;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface CodeWritingQuestion extends BaseQuestion {
  type: 'code-writing';
  correctCode: string;
  language: string;
}

export interface CodeExplanationQuestion extends BaseQuestion {
  type: 'code-explanation';
  code: string;
  language: string;
  correctExplanation: string;
}

export interface MultiTrueFalseQuestion extends BaseQuestion {
  type: 'multi-true-false';
  statements: {
    text: string;
    correct: boolean;
  }[];
}

export type Question = 
  | MultipleChoiceQuestion 
  | TrueFalseQuestion 
  | CodeWritingQuestion 
  | CodeExplanationQuestion
  | MultiTrueFalseQuestion;

export interface QuizState {
  currentQuestion: number;
  score: { correct: number; incorrect: number };
  answers: (number | boolean | boolean[] | null)[];
  showHint: boolean;
  showAnswer: boolean;
  streak: number;
}
</parameter>