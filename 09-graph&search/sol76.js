function solution(n, arr) {
  let answer = 0;
  // 방향 그래프 배열
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  // 방문 여부 확인 배열
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  // 깊이 우선 탐색 이용
  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);

  return answer;
}

let n = 5;
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(n, arr));
