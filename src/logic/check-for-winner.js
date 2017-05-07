const CheckForWinner = (board, turns) => {

  let a,b,c;

  //check horizontal
  for (let i = 0; i < board.length; i ++) {
    [a,b,c] = [board[i][0], board[i][1], board[i][2]];
    if (a === b && a === c) return a;
  };

  //check vertical
  for (let i = 0; i < board[0].length; i ++) {
    [a,b,c] = [board[0][i], board[1][i], board[2][i]];
    if (a === b && a === c) return a;
  };

  //check left to right diagonal
  [a,b,c] = [board[0][0], board[1][1], board[2][2]];
  if (a === b && a === c) return a;

  //check right to left diagonal
  [a,b,c] = [board[0][2], board[1][1], board[2][0]];
  if (a === b && a === c) return a;

  //check 9 moves
  if (turns === 9) return 'draw';

  return null;
};

export default CheckForWinner;
