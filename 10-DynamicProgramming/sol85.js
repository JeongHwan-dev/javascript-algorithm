function solution(n, m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    const score = arr[i][0];
    const time = arr[i][1];

    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  }

  answer = dy[m];

  return answer;
}

let n = 5;
let m = 20;
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(n, m, arr));
