// Solution 1
function solution(n, arr) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }

    dp[i] = max + 1;
  }

  const maxLength = Math.max(...dp);

  return maxLength;
}

let n = 8;
let arr = [5, 3, 7, 8, 6, 2, 9, 4];

console.log(solution(n, arr));
