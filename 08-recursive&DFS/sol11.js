function solution(n) {
  let answer;

  // 깊이 우선 탐색 이용
  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }

  answer = DFS(n);

  return answer;
}

let n = 5;

console.log(solution(n));
