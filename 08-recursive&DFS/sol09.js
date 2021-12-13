// Solution 1
function solution1(n, arr, m) {
  let minCoinCount = Number.MAX_SAFE_INTEGER;

  function DFS(l, sum) {
    if (sum > m) {
      return;
    }

    if (l > minCoinCount) {
      return;
    }

    if (sum === m) {
      minCoinCount = Math.min(minCoinCount, l);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(l + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return minCoinCount;
}

let n = 3;
let arr = [1, 2, 5];
let m = 15;

console.log(solution1(n, arr, m));
