// Solution 1
// 이중 for 문을 활용한 솔루션

function solution1(board, moves) {
  const _board = board.map((row) => row.slice());
  const box = [];
  let removedCount = 0;

  for (const line of moves) {
    const idx = line - 1;

    for (let r = 0; r < _board.length; r++) {
      if (_board[r][idx] !== 0) {
        box.push(_board[r][idx]);
        _board[r][idx] = 0;
        break;
      }
    }

    const boxLen = box.length;

    if (boxLen >= 2 && box[boxLen - 1] === box[boxLen - 2]) {
      box.pop();
      box.pop();
      removedCount += 2;
    }
  }

  return removedCount;
}

// Solution 2
// forEach() 메서드를 활용한 솔루션

function solution2(board, moves) {
  const N = board.length;
  const _board = board.map((row) => row.slice());
  const box = [];
  let removedCount = 0;

  moves.forEach((line) => {
    for (let r = 0; r < N; r++) {
      if (_board[r][line - 1] !== 0) {
        const item = _board[r][line - 1];

        _board[r][line - 1] = 0;

        if (box.length > 0 && box[box.length - 1] === item) {
          box.pop();
          removedCount += 2;
        } else {
          box.push(item);
        }

        break;
      }
    }
  });

  return removedCount;
}

// Solution 3
// catchItem() 함수를 만들어 활용한 솔루션

function solution3(board, moves) {
  const N = board.length;
  const _board = board.map((row) => row.slice());
  const box = [];
  let popCount = 0;

  function catchItem(line) {
    for (let i = 0; i < N; i++) {
      if (_board[i][line] !== 0) {
        const item = _board[i][line];

        _board[i][line] = 0;

        return item;
      }
    }

    return;
  }

  for (const line of moves) {
    const item = catchItem(line - 1);

    if (!item) {
      continue;
    }

    if (box.length > 0 && box[box.length - 1] === item) {
      box.pop();
      popCount++;
    } else {
      box.push(item);
    }
  }

  return popCount * 2;
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
console.log(solution2(board, moves));
console.log(solution3(board, moves));
