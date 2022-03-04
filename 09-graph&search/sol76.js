// Solution 1
function solution(n, arr) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const visited = Array.from({ length: n + 1 }, () => false);
  let numberOfCases = 0;

  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  function dfs(l) {
    if (l === n) {
      numberOfCases += 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[l][i] === 1 && !visited[i]) {
          visited[i] = true;
          dfs(i);
          visited[i] = false;
        }
      }
    }
  }

  visited[1] = true;
  dfs(1);

  return numberOfCases;
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
