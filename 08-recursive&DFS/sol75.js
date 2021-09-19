function solution(n, k, arr, m) {
  let answer = [];

  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

let n = 5;
let k = 3;
let arr = [2, 4, 5, 8, 12];
let m = 6;

console.log(solution(n, k, arr, m));
