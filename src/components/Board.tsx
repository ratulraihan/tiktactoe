import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: Array<string | null>;
  winningLine: number[] | null;
  onClick: (i: number) => void;
  isAnimating: boolean;
}

const Board: React.FC<BoardProps> = ({ squares, winningLine, onClick, isAnimating }) => {
  const renderSquare = (i: number) => {
    const isWinningSquare = winningLine?.includes(i) || false;
    
    return (
      <Square 
        key={i}
        value={squares[i]} 
        onClick={() => onClick(i)} 
        isWinningSquare={isWinningSquare}
        index={i}
        isAnimating={isAnimating}
      />
    );
  };

  return (
    <div className={`grid grid-cols-3 gap-2 w-full max-w-xs mx-auto transition-all duration-500 ${isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
      {Array(9).fill(null).map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;