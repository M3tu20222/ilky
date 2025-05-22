
import React from 'react';
import { Option } from '../types';

interface OptionItemProps {
  option: Option;
  isSelected: boolean;
  isSubmitted: boolean;
  isCorrect: boolean;
  onSelect: (optionId: string) => void;
  disabled: boolean;
}

const OptionItem: React.FC<OptionItemProps> = ({ option, isSelected, isSubmitted, isCorrect, onSelect, disabled }) => {
  let bgColor = 'bg-gray-800 hover:bg-gray-700';
  let textColor = 'text-gray-300';
  let borderColor = 'border-gray-700';
  let shadow = 'shadow-[0_0_5px_rgba(100,100,100,0.3)]'; // Subtle default shadow

  if (isSubmitted) {
    if (isCorrect) {
      bgColor = 'bg-green-500/30';
      textColor = 'text-green-300';
      borderColor = 'border-green-500';
      shadow = 'shadow-[0_0_15px_rgba(0,255,0,0.6)]';
    } else if (isSelected && !isCorrect) {
      bgColor = 'bg-red-500/30';
      textColor = 'text-red-300';
      borderColor = 'border-red-500';
      shadow = 'shadow-[0_0_15px_rgba(255,0,0,0.6)]';
    }
  } else if (isSelected) {
    bgColor = 'bg-cyan-600/80';
    textColor = 'text-white';
    borderColor = 'border-cyan-400';
    shadow = 'shadow-[0_0_15px_rgba(0,255,255,0.6)]';
  } else if (!disabled) {
     bgColor = 'bg-gray-800 hover:bg-cyan-700/60'; // Hover effect only if not disabled
     borderColor = 'border-gray-700 hover:border-cyan-500';
     shadow = 'hover:shadow-[0_0_10px_rgba(0,255,255,0.4)]';
  }


  return (
    <button
      onClick={() => onSelect(option.id)}
      disabled={disabled || isSubmitted}
      className={`
        w-full p-4 my-2 border-2 rounded-lg transition-all duration-300 ease-in-out
        transform hover:scale-105 focus:outline-none
        ${bgColor} ${textColor} ${borderColor} ${shadow}
        ${(disabled || isSubmitted) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
      `}
    >
      <p className="text-left text-sm md:text-base">{option.text}</p>
    </button>
  );
};

export default OptionItem;
