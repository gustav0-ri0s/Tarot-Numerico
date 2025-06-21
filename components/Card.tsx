import React from 'react';
import { CardData } from '../types';

interface CardProps {
  cardData: CardData;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ cardData, isSelected, onToggle }) => {
  const { id, name, value, numbers, bgColor, textColor, selectedRingColor } = cardData;

  return (
    <div
      onClick={() => onToggle(id)}
      className={`
        ${bgColor} ${textColor} 
        rounded-xl shadow-2xl p-1 cursor-pointer
        transition-all duration-300 ease-in-out
        hover:shadow-purple-400/50 hover:-translate-y-1
        ${isSelected ? `${selectedRingColor} ring-4 scale-105 shadow-purple-600/60` : 'ring-2 ring-transparent'}
        w-full max-w-xs sm:max-w-none
      `}
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(id);}}
    >
      <div className="flex flex-col items-center p-3 space-y-2 h-full">
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <p className="text-sm opacity-80">(Valor: {value})</p>
        <div className="grid grid-cols-4 gap-x-3 gap-y-1 text-center text-sm font-medium h-48 w-full overflow-y-auto p-2 rounded-md bg-black/10 scrollbar-thin">
          {numbers.map((num) => (
            <span key={num} className="py-0.5 px-0.5">
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
