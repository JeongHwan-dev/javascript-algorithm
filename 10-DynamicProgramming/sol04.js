function solution(n, coin, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);

  dy[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }

  answer = dy[m];

  return answer;
}

let n = 3;
let coin = [1, 2, 5];
let m = 15;

console.log(solution(n, coin, m));
