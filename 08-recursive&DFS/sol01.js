// Solution 1
// DFS 알고리즘을 이용한 솔루션
function solution(n) {
  const nums = [];

  function dfs(l) {
    if (l === 0) {
      return;
    } else {
      dfs(l - 1);
      nums.push(l);
    }
  }

  dfs(n);

  return nums;
}

let n = 3;

console.log(solution(n));
