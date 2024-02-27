function isSolved(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] !== 0) {
        return board[i][0];
      }
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] !== 0) {
        return board[0][i];
      }
    }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] !== 0) {
      return board[0][0];
    }
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] !== 0) {
      return board[0][2];
    }
  }

  for (let row of board) {
    if (row.includes(0)) {
      return -1;
    }
  }

  return 0;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // print -1
