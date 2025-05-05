import React from 'react';

interface StatusMessageProps {
  winner: string | null;
  gameIsDraw: boolean;
  currentPlayer: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ winner, gameIsDraw, currentPlayer }) => {
  return (
    <div className="h-12 flex items-center justify-center text-center font-medium">
      {winner ? (
        <div className="animate-pulse text-lg">
          Player <span className={winner === 'X' ? 'text-blue-400 font-bold' : 'text-purple-400 font-bold'}>{winner}</span> wins!
        </div>
      ) : gameIsDraw ? (
        <div className="animate-pulse text-lg">Game ended in a draw!</div>
      ) : (
        <div>
          Next player: <span className={currentPlayer === 'X' ? 'text-blue-400 font-bold' : 'text-purple-400 font-bold'}>{currentPlayer}</span>
        </div>
      )}
    </div>
  );
};

export default StatusMessage;