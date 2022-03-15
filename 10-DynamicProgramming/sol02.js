// Solution 1
function solution(n) {
  const dp = Array.from({ length: n + 2 }, () => 0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n + 1];
}

let n = 7;

console.log(solution(n));
