function solution(n, r) {
  let answer;
  // 3행 5열 배열 생성
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  // 깊이 우선 탐색 이용
  function DFS(n, r) {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }

    if (n === r || r === 0) {
      return 1;
    } else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }

  answer = DFS(n, r);

  return answer;
}

let n = 5;
let r = 3;

console.log(solution(n, r));

n = 33;
r = 19;

console.log(solution(n, r));
