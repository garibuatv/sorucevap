import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from './components/QuestionCard';
import { ScoreBoard } from './components/ScoreBoard';
import { ProgressBar } from './components/ProgressBar';
import { NavigationButtons } from './components/NavigationButtons';
import { AIAssistant } from './components/AIAssistant';
import { questions } from './data/questions';
import { QuizState } from './types/quiz';
import { useConfetti } from './hooks/useConfetti';
import { useKeyboard } from './hooks/useKeyboard';
import { Brain, Code2, Sparkles } from 'lucide-react';
import EzberPaneli from './components/EzberPaneli';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: { correct: 0, incorrect: 0 },
    answers: new Array(questions.length).fill(null),
    showHint: false,
    showAnswer: false,
    streak: 0
  });

  const [aiMessage, setAiMessage] = useState("Merhaba! Programlama sorularını çözmeye hazır mısın? Başlayalım! 🚀");
  const [aiMood, setAiMood] = useState<'neutral' | 'happy' | 'encouraging' | 'excited'>('neutral');
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [ezberOpen, setEzberOpen] = useState(false);

  const { fireConfetti, fireSimpleConfetti } = useConfetti();
  
  const currentQuestion = questions[quizState.currentQuestion];
  const isAnswered = quizState.answers[quizState.currentQuestion] !== null;

  useKeyboard({
    onPrevious: () => handlePrevious(),
    onNext: () => handleNext(),
    onShowHint: () => toggleHint(),
    onAnswer: (answer) => handleAnswer(answer),
    canGoPrevious: quizState.currentQuestion > 0,
    canGoNext: quizState.currentQuestion < questions.length - 1,
    questionType: currentQuestion.type,
    optionsCount: currentQuestion.type === 'multiple-choice' ? (currentQuestion as any).options.length : 0
  });

  const checkAnswer = (userAnswer: number | boolean | boolean[], question: any): boolean => {
    switch (question.type) {
      case 'multiple-choice':
        return userAnswer === question.correctAnswer;
      case 'true-false':
        return userAnswer === question.correctAnswer;
      case 'multi-true-false':
        if (!Array.isArray(userAnswer)) return false;
        return question.statements.every((stmt: any, index: number) => 
          userAnswer[index] !== undefined && 
          ((userAnswer[index] === true && stmt.correct) || (userAnswer[index] === false && !stmt.correct))
        );
      default:
        return true; // For code writing and explanation, always consider correct for demonstration
    }
  };

  const handleAnswer = (answer: number | boolean | boolean[]) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answer;

    const isCorrect = checkAnswer(answer, currentQuestion);
    const newScore = { ...quizState.score };
    const newStreak = isCorrect ? quizState.streak + 1 : 0;

    if (isCorrect) {
      newScore.correct++;
      setLastAnswerCorrect(true);
      
      if (newStreak >= 3) {
        fireConfetti();
        setAiMessage(`Harika! ${newStreak} soru üst üste doğru! Sen bir programlama dehasısın! 🎉`);
        setAiMood('excited');
      } else {
        fireSimpleConfetti();
        const messages = [
          "Mükemmel! Doğru cevap! 🎉",
          "Bravo! Çok iyi gidiyorsun! 👏",
          "Süper! Böyle devam! ⭐",
          "Harika! Programlama bilgin çok iyi! 🚀"
        ];
        setAiMessage(messages[Math.floor(Math.random() * messages.length)]);
        setAiMood('happy');
      }
    } else {
      newScore.incorrect++;
      setLastAnswerCorrect(false);
      
      const messages = [
        "Sorun değil! Hatalardan öğreniriz. 💪",
        "Bu sefer olmadı, ama devam et! 🌟",
        "Yanlış cevap, ama vazgeçme! 🎯",
        "Her hata bir öğrenme fırsatı! 📚"
      ];
      setAiMessage(messages[Math.floor(Math.random() * messages.length)]);
      setAiMood('encouraging');
    }

    setQuizState({
      ...quizState,
      answers: newAnswers,
      score: newScore,
      streak: newStreak
    });

    // Reset hint and answer visibility when answering
    setTimeout(() => {
      setQuizState(prev => ({
        ...prev,
        showHint: false,
        showAnswer: false
      }));
    }, 2000);
  };

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        showHint: false,
        showAnswer: false
      });
      setLastAnswerCorrect(null);
      setAiMessage("Yeni soru! Hazır mısın? 🤔");
      setAiMood('neutral');
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1,
        showHint: false,
        showAnswer: false
      });
      setLastAnswerCorrect(null);
      setAiMessage("Önceki soruya döndük! 📖");
      setAiMood('neutral');
    }
  };

  const toggleHint = () => {
    setQuizState({
      ...quizState,
      showHint: !quizState.showHint
    });
    
    if (!quizState.showHint) {
      setAiMessage("İpucu gösteriliyor! Bu sana yardımcı olacak. 💡");
      setAiMood('encouraging');
    }
  };

  const toggleAnswer = () => {
    if (isAnswered) {
      setQuizState({
        ...quizState,
        showAnswer: !quizState.showAnswer
      });
      
      if (!quizState.showAnswer) {
        setAiMessage("Cevap açıklaması gösteriliyor! 📖");
        setAiMood('neutral');
      }
    }
  };

  useEffect(() => {
    // Welcome message on load
    setTimeout(() => {
      setAiMessage("Sorulara cevap vermek için tıkla ya da klavye kısayollarını kullan! (1-4: Seçenekler, T/F: Doğru/Yanlış, H: İpucu)");
      setAiMood('neutral');
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-6 py-8">
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Ezberle Butonu */}
            <button
              onClick={() => setEzberOpen(true)}
              className="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-4 py-2 rounded-xl shadow-lg z-10"
            >
              Ezberle
            </button>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <Brain className="w-12 h-12" />
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                Komisyoncu Emre
              </h1>
              <Code2 className="w-12 h-12" />
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-bold opacity-90"
            >
              İlhanımla bu sınavı geçeceğiz
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <ProgressBar 
          current={quizState.currentQuestion + 1} 
          total={questions.length} 
        />
        
        <ScoreBoard
          correct={quizState.score.correct}
          incorrect={quizState.score.incorrect}
          streak={quizState.streak}
          currentQuestion={quizState.currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={quizState.currentQuestion}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              showHint={quizState.showHint}
              showAnswer={quizState.showAnswer}
              userAnswer={quizState.answers[quizState.currentQuestion]}
              isAnswered={isAnswered}
            />
          </motion.div>
        </AnimatePresence>

        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          onShowHint={toggleHint}
          onShowAnswer={toggleAnswer}
          canGoPrevious={quizState.currentQuestion > 0}
          canGoNext={quizState.currentQuestion < questions.length - 1}
          showHint={quizState.showHint}
          showAnswer={quizState.showAnswer}
          isAnswered={isAnswered}
        />
      </div>

      {/* AI Assistant */}
      

      {/* Keyboard shortcuts info */}
      <div className="fixed bottom-6 left-6 bg-black/80 text-white px-4 py-2 rounded-lg text-sm max-w-xs hidden lg:block">
        <div className="font-bold mb-1">Klavye Kısayolları:</div>
        <div>← → : Gezinme | H: İpucu</div>
        <div>1-4: Seçenekler | T/F: Doğru/Yanlış</div>
      </div>

      {/* Ezber Paneli */}
      <EzberPaneli open={ezberOpen} onClose={() => setEzberOpen(false)} />
    </div>
  );
}

export default App;