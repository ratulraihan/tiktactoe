/**
 * Calculates if there is a winner in the current board state.
 * Returns the winner (X or O) and the winning line if there is a winner.
 */
export const calculateWinner = (squares: Array<string | null>): { winner: string | null, winningLine: number[] | null } => {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { 
        winner: squares[a], 
        winningLine: [a, b, c] 
      };
    }
  }

  return { winner: null, winningLine: null };
};

/**
 * Checks if the board is full (all squares filled).
 */
export const isBoardFull = (squares: Array<string | null>): boolean => {
  return squares.every(square => square !== null);
};