// Solution 1
// 1. 게임 결과를 담을 result 빈 배열 생성
// 2. for 문을 통해 두 배열 탐색
// 3. if 문을 이용하여 A가 이길 경우, B가 이길 경우, 비길 경우 조건을 판단하여 게임 결과를 도출
// 4. 게임 결과를 result 배열에 추가
function solution1(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    ) {
      result.push('A');
    } else if (
      (b[i] === 1 && a[i] === 3) ||
      (b[i] === 2 && a[i] === 1) ||
      (b[i] === 3 && a[i] === 2)
    ) {
      result.push('B');
    } else {
      result.push('D');
    }
  }

  return result;
}

// Solution2
// 1. 가위바위보 게임 함수를 따로 생성
// 2. map() 메서드를 사용해 동일한 인덱스의 a, b 배열의 요소를 게임 함수에 넣는다.
// 3. 게임 함수가 반환한 결과 값으로 이루어진 새 배열 생성
function game(playerA, playerB) {
  let winner = '';

  if (playerA === playerB) {
    return 'D';
  }

  if (playerA === 1) {
    winner = playerB === 3 ? 'A' : 'B';
  } else if (playerA === 2) {
    winner = playerB === 1 ? 'A' : 'B';
  } else {
    winner = playerB === 2 ? 'A' : 'B';
  }

  return winner;
}

function solution2(a, b) {
  const result = a.map((e, index) => game(e, b[index]));

  return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

console.log(solution1(a, b));
console.log(solution2(a, b));
