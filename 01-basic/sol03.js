// Solution 1
// 1. Math.ceil() 메서드를 사용해 필요한 다스 수 도출
function solution(n) {
  const dozen = Math.ceil(n / 12);

  return dozen;
}

let n = 25;

console.log(solution(n));
