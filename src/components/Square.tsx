import React, { useEffect, useState } from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
  index: number;
  isAnimating: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare, index, isAnimating }) => {
  const [isPlaced, setIsPlaced] = useState<boolean>(false);
  
  useEffect(() => {
    if (value) {
      setIsPlaced(true);
    }
  }, [value]);
  
  useEffect(() => {
    if (isAnimating) {
      setIsPlaced(false);
    }
  }, [isAnimating]);

  const renderSymbol = () => {
    if (value === 'X') {
      return <X className={`size-10 text-blue-400 transition-all duration-300 ${isPlaced ? 'scale-100' : 'scale-0'}`} strokeWidth={2.5} />;
    } else if (value === 'O') {
      return <Circle className={`size-10 text-purple-400 transition-all duration-300 ${isPlaced ? 'scale-100' : 'scale-0'}`} strokeWidth={2.5} />;
    }
    return null;
  };

  return (
    <button 
      className={`aspect-square flex items-center justify-center bg-white/5 
        rounded-lg border-2 transition-all duration-200 
        ${isWinningSquare ? 'border-amber-400 bg-amber-400/20' : 'border-white/10 hover:border-white/30'} 
        ${!value && !isAnimating ? 'hover:bg-white/10' : ''}
        animate-fadeIn`}
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={onClick}
      disabled={!!value || isAnimating}
    >
      {renderSymbol()}
    </button>
  );
};

export default Square;