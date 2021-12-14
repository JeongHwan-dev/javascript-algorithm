// Solution 1
function solution1(n, r) {
  const dy = Array.from(Array(35), () => Array(35).fill(0));

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

  const result = DFS(n, r);

  return result;
}

let n = 5;
let r = 3;

console.log(solution1(n, r));

n = 33;
r = 19;

console.log(solution1(n, r));
