import React, { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner, isBoardFull } from '../utils/gameLogic';
import ScoreBoard from './ScoreBoard';
import StatusMessage from './StatusMessage';
import ResetButton from './ResetButton';

const Game: React.FC = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [scores, setScores] = useState<{ X: number; O: number; ties: number }>({
    X: 0,
    O: 0,
    ties: 0,
  });
  const [isResetAnimating, setIsResetAnimating] = useState<boolean>(false);

  const currentBoard = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const currentPlayer = xIsNext ? 'X' : 'O';
  
  const { winner, winningLine } = calculateWinner(currentBoard);
  const gameIsDraw = !winner && isBoardFull(currentBoard);
  const gameIsOver = winner || gameIsDraw;

  useEffect(() => {
    if (winner) {
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner as keyof typeof prev] + 1,
      }));
    } else if (gameIsDraw) {
      setScores(prev => ({
        ...prev,
        ties: prev.ties + 1,
      }));
    }
  }, [winner, gameIsDraw]);

  const handleClick = (i: number) => {
    if (currentBoard[i] || gameIsOver) {
      return;
    }

    const newHistory = history.slice(0, currentMove + 1);
    const newBoard = [...currentBoard];
    
    newBoard[i] = currentPlayer;
    
    setHistory([...newHistory, newBoard]);
    setCurrentMove(newHistory.length);
  };

  const resetGame = () => {
    setIsResetAnimating(true);
    setTimeout(() => {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setIsResetAnimating(false);
    }, 500);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, ties: 0 });
    resetGame();
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl text-white animate-fadeIn transition-all">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Tic Tac Toe
      </h1>
      
      <ScoreBoard scores={scores} resetScores={resetScores} />
      
      <StatusMessage 
        winner={winner} 
        gameIsDraw={gameIsDraw} 
        currentPlayer={currentPlayer} 
      />
      
      <Board 
        squares={currentBoard} 
        winningLine={winningLine}
        onClick={handleClick} 
        isAnimating={isResetAnimating}
      />
      
      <ResetButton onClick={resetGame} />
    </div>
  );
};

export default Game;