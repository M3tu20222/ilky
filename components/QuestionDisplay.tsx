
import React, { useState, useEffect } from 'react';
import { Question, Option } from '../types';
import OptionItem from './OptionItem';

interface QuestionDisplayProps {
  question: Question;
  onAnswerSubmit: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onAnswerSubmit, questionNumber, totalQuestions }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
  }, [question]);

  const handleOptionSelect = (optionId: string) => {
    if (!isSubmitted) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedOptionId === null) return;
    setIsSubmitted(true);
    const isCorrect = selectedOptionId === question.correctAnswerId;
    
    // Delay moving to next question to show feedback
    setTimeout(() => {
      onAnswerSubmit(isCorrect);
    }, 1500); 
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.3),0_0_10px_rgba(255,0,255,0.2)] border-2 border-purple-600/50">
      <div className="mb-6">
        <p className="text-sm text-purple-400 font-semibold tracking-wider">
          SORU {questionNumber} / {totalQuestions}
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mt-1 leading-tight" style={{ whiteSpace: 'pre-line' }}>
          {question.questionText}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionItem
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            isSubmitted={isSubmitted}
            isCorrect={option.id === question.correctAnswerId}
            onSelect={handleOptionSelect}
            disabled={isSubmitted}
          />
        ))}
      </div>

      { !isSubmitted && selectedOptionId && (
        <button
          onClick={handleSubmit}
          disabled={isSubmitted || selectedOptionId === null}
          className="mt-8 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(255,26,140,0.7)] hover:shadow-[0_0_20px_rgba(255,26,140,0.9)] focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cevabı Gönder
        </button>
      )}
       {isSubmitted && (
        <div className="mt-8 text-center text-lg font-semibold">
            {selectedOptionId === question.correctAnswerId ? (
                <span className="text-green-400 animate-pulse">Doğru! Sonraki soruya geçiliyor...</span>
            ) : (
                <span className="text-red-400 animate-pulse">Yanlış. Doğru cevap vurgulandı. Sonraki soruya geçiliyor...</span>
            )}
        </div>
       )}
    </div>
  );
};

export default QuestionDisplay;
