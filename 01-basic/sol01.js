// Solution 1
// 1. if, else 문을 사용하여 최소값 도출
function solution1(a, b, c) {
  let minNum;

  if (a < b) {
    minNum = a;
  } else {
    minNum = b;
  }

  if (c < minNum) {
    minNum = c;
  }

  return minNum;
}

// Solution 2
// 1. Math.min() 메소드를 사용하여 최소값 도출
function solution2(a, b, c) {
  return Math.min(a, b, c);
}

let a = 6;
let b = 5;
let c = 11;

console.log(solution1(a, b, c));
console.log(solution2(a, b, c));
