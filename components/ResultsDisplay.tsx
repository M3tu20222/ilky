
import React from 'react';

interface ResultsDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : "0.0";
  let message = "";
  let messageColor = "text-cyan-400";

  // Fix: Ensure 'percentage' is a string before parseFloat
  if (parseFloat(percentage) >= 80) {
    message = "Mükemmel! İlk yardım konusunda ustasın!";
    messageColor = "text-green-400";
  // Fix: Ensure 'percentage' is a string before parseFloat
  } else if (parseFloat(percentage) >= 50) {
    message = "İyi iş! Biraz daha pratikle harika olacaksın.";
    messageColor = "text-yellow-400";
  } else {
    message = "Tekrar denemekte fayda var. Öğrenmeye devam!";
    messageColor = "text-red-400";
  }


  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gray-900 rounded-xl shadow-[0_0_30px_rgba(255,0,255,0.4),0_0_15px_rgba(0,255,255,0.3)] border-2 border-pink-600/70 text-center">
      <h2 className="text-4xl font-extrabold text-purple-400 mb-4 tracking-tight">Test Tamamlandı!</h2>
      <div className="my-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-2xl text-gray-200 mb-2">Skorun:</p>
        <p className="text-6xl font-bold text-cyan-400 mb-2">
          {score} / {totalQuestions}
        </p>
        <p className="text-3xl font-semibold text-pink-500">
          ({percentage}%)
        </p>
      </div>
      <p className={`text-xl mb-8 ${messageColor} font-medium`}>{message}</p>
      <button
        onClick={onRestart}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:shadow-[0_0_30px_rgba(0,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Yeniden Başla
      </button>
    </div>
  );
};

export default ResultsDisplay;