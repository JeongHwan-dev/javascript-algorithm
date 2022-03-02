// Solution 1
function solution1(n, r) {
  const dy = Array.from(Array(35), () => Array(35).fill(0));

  function dfs(n, r) {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }

    if (n === r || r === 0) {
      return 1;
    } else {
      return (dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
    }
  }

  const result = dfs(n, r);

  return result;
}

// Solution 2
function getNFactorial(num) {
  function dfs(num) {
    return num === 1 ? 1 : num * dfs(num - 1);
  }

  const nFactorial = dfs(num);

  return nFactorial;
}

function solution2(n, r) {
  const combinationCount =
    getNFactorial(n) / (getNFactorial(n - r) * getNFactorial(r));

  return combinationCount;
}

let n = 5;
let r = 3;

console.log(solution1(n, r));
console.log(solution2(n, r));

n = 33;
r = 19;

console.log(solution1(n, r));
console.log(solution2(n, r));
