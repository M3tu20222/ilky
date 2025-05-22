
import React, { useState, useEffect } from 'react';
import { quizQuestions } from './data/quizData';
import QuestionDisplay from './components/QuestionDisplay';
import ResultsDisplay from './components/ResultsDisplay';
import ProgressBar from './components/ProgressBar';
import { Question } from './types';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  useEffect(() => {
    setShuffledQuestions(shuffleArray(quizQuestions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizEnded(false);
  }, []);


  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizEnded(true);
    }
  };

  const restartQuiz = () => {
    setShuffledQuestions(shuffleArray(quizQuestions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizEnded(false);
  };
  
  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950">
        <p className="text-2xl text-cyan-400 animate-pulse">Yükleniyor...</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-950 via-purple-900/30 to-gray-950">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          <span className="text-cyan-400">Milli Eğitim</span>
          <span className="text-pink-500"> İlk Yardım</span>
          <span className="text-purple-400"> Testi</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">Bilgini sına, hayat kurtarmaya hazır ol!</p>
      </header>
      
      <div className="w-full max-w-2xl">
        {!quizEnded ? (
          <>
            <ProgressBar current={currentQuestionIndex + 1} total={shuffledQuestions.length} />
            <QuestionDisplay
              question={shuffledQuestions[currentQuestionIndex]}
              onAnswerSubmit={handleAnswerSubmit}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={shuffledQuestions.length}
            />
             <div className="mt-6 text-center text-xl font-bold text-pink-400">
                Anlık Skor: {score} / {shuffledQuestions.length}
            </div>
          </>
        ) : (
          <ResultsDisplay
            score={score}
            totalQuestions={shuffledQuestions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
      <footer className="mt-12 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Sağlık Bakanlığı İlk Yardım Sistemleri. Tüm hakları saklıdır.</p>
        <p>Bu test sadece eğitim amaçlıdır. Gerçek acil durumlarda profesyonel yardım alın.</p>
      </footer>
    </div>
  );
};

export default App;
