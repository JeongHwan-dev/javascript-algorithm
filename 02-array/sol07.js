// Solution 1
// 1. 사방탐색에 사용할 dx, dy 배열 생성, (상 우 하 좌)순서
// 2. 봉우리 개수를 카운트할 count 변수를 0 으로 초기화하여 생성
// 3. 이중 for 문을 이용해 각 지점에서의 사방 탐색 진행 (map 범위 내에서)
// 4. 사방 탐색 중 현재 지역보다 높은 지역이 있다면 flag 변수를 false로 변경하고 반복문 종료
// 5. 만약 반복문이 중간에 종료되지 않고 무사히 다 탐색이 끝나 flag 변수값이 여전히 true라면 봉우리 숫자 +1 증가

function solution1(n, map) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let count = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      let flag = true;

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          map[nx][ny] >= map[x][y]
        ) {
          flag = false;
          break;
        }
      }

      if (flag) {
        count++;
      }
    }
  }

  return count;
}

// Solution 2
// 1. 사방탐색에 사용할 dx, dy 배열 생성, (상 우 하 좌)순서
// 2. 봉우리 개수를 카운트할 count 변수를 0 으로 초기화하여 생성
// 3. 이중 for 문을 이용해 각 지점에서의 사방 탐색 진행 (map 범위 내에서)
// 4. 사방 탐색을 통해 사방 지역의 높이를 temp 배열에 넣기
// 5. 사방 탐색이 끝나고 현재 지역의 높이를 temp 배열의 최대값과 비교하여 현재 지역의 높이가 더 크면 봉우리 숫자 +1 증가

function solution2(n, map) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let count = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const temp = [];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          temp.push(map[nx][ny]);
        }
      }

      if (map[x][y] > Math.max(...temp)) {
        count++;
      }
    }
  }

  return count;
}

let n = 5;
let map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution1(n, map));
console.log(solution2(n, map));
