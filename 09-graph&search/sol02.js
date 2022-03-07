// Solution 1
function solution1(n, arr) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  let numberOfCases = 0;

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function dfs(l) {
    if (l === n) {
      numberOfCases += 1;
    } else {
      for (let i = 0; i < graph[l].length; i++) {
        if (!visited[graph[l][i]]) {
          visited[graph[l][i]] = true;
          dfs(graph[l][i]);
          visited[graph[l][i]] = false;
        }
      }
    }
  }

  visited[1] = 1;
  dfs(1);

  return numberOfCases;
}

// Solution 2
function solution2(n, arr) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => false);
  const allOfPath = [];
  const path = [1];

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function dfs(l) {
    if (l === n) {
      allOfPath.push(path.slice());
    } else {
      for (let i = 0; i < graph[l].length; i++) {
        if (!visited[graph[l][i]]) {
          visited[graph[l][i]] = true;
          path.push(graph[l][i]);
          dfs(graph[l][i]);
          visited[graph[l][i]] = false;
          path.pop();
        }
      }
    }
  }

  visited[1] = 1;
  dfs(1);

  return allOfPath.length;
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

console.log(solution1(n, arr));
console.log(solution2(n, arr));
