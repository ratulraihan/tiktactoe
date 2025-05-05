import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ScoreBoardProps {
  scores: { X: number; O: number; ties: number };
  resetScores: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, resetScores }) => {
  return (
    <div className="w-full flex gap-2">
      <div className="flex-1 bg-white/5 rounded-lg p-3 text-center transition-all hover:bg-white/10">
        <div className="text-blue-400 font-bold">X</div>
        <div className="text-lg font-semibold">{scores.X}</div>
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg p-3 text-center transition-all hover:bg-white/10">
        <div className="text-gray-300 font-bold">Ties</div>
        <div className="text-lg font-semibold">{scores.ties}</div>
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg p-3 text-center transition-all hover:bg-white/10">
        <div className="text-purple-400 font-bold">O</div>
        <div className="text-lg font-semibold">{scores.O}</div>
      </div>
      
      <button 
        className="bg-white/5 rounded-lg p-2 flex items-center justify-center transition-all hover:bg-white/10 hover:rotate-180 duration-300" 
        onClick={resetScores}
        title="Reset scores"
      >
        <RotateCcw size={20} />
      </button>
    </div>
  );
};

export default ScoreBoard;