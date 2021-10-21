// Solution 1
// 1. 짝을 만들 수 있는 경우의 수 카운트할 변수 pairCount 를 0으로 초기화해서 생성
// 2. 이중 for 문을 사용해 짝을 만들 수 있는 경우인지 확인
// 3. for 문을 통해 시험마다 멘토가 멘티보다 더 높은 점수이면 count 를 +1
// 4. 치뤄진 시험을 모두 확인하고 count 값이 시험 횟수와 동일하다면 멘토, 멘티 짝이 가능한 것이므로 짝을 만들 수 있는 경우의 수 +1
function solution(n, m, test) {
  let pairCount = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;

      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) {
            pi = s;
          } else if (test[k][s] === j) {
            pj = s;
          }
        }

        if (pi < pj) {
          count++;
        }
      }

      if (count === m) {
        pairCount++;
      }
    }
  }

  return pairCount;
}

let n = 4;
let m = 3;

let test = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(n, m, test));
