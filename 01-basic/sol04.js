// Solution 1
// 1. for문을 사용해 1 ~ n 까지 계속 더히기

function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

let n = 6;

console.log(solution(n));

n = 10;

console.log(solution(n));
