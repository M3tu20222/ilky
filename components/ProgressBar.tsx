
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-700 rounded-full h-4 mb-6 shadow-inner overflow-hidden">
      <div
        className="bg-cyan-500 h-4 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,255,255,0.7)]"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
