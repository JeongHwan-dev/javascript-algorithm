// Solution 1
function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let numberOfCases = 0;

  function dfs(x, y) {
    if (x === 6 && y === 6) {
      numberOfCases += 1;
    } else {
      for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];

        if (
          newX >= 0 &&
          newX <= 6 &&
          newY >= 0 &&
          newY <= 6 &&
          board[newX][newY] === 0
        ) {
          board[newX][newY] = 1;
          dfs(newX, newY);
          board[newX][newY] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  dfs(0, 0);

  return numberOfCases;
}

let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(board));
