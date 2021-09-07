function solution1(board, moves) {
  let answer = 0;
  let stack = [];

  for (let n of moves) {
    let idx = n - 1;

    for (let r = 0; r < board.length; r++) {
      if (board[r][idx] !== 0) {
        stack.push(board[r][idx]);
        board[r][idx] = 0;
        break;
      }
    }

    let sLen = stack.length;

    if (sLen >= 2 && stack[sLen - 1] === stack[sLen - 2]) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }

  return answer;
}

function solution2(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];

        board[i][pos - 1] = 0;

        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }

        break;
      }
    }
  });

  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution1(board, moves));

board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution1(board, moves));
