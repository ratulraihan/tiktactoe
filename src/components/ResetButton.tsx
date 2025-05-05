import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 font-medium transition-all duration-300 hover:shadow-lg group"
      onClick={onClick}
    >
      <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-300" />
      New Game
    </button>
  );
};

export default ResetButton;