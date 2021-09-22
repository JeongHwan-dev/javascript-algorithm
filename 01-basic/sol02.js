// Solution 1
// 1. if, else 문을 사용해 세 개의 막대 길이 중 가장 긴 길이를 구하고
// 2. 삼각형 가능 여부 판별 (삼각형의 가장 긴 변의 길이는 나머지 두 변의 길이보다 크거나 같을 수 없다.)
function solution1(a, b, c) {
  let answer = 'YES';
  let max;
  const sum = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if (sum - max <= max) {
    answer = 'NO';
  }

  return answer;
}

// Solution 2
// 1. Math.max() 메서드를 사용해 세 값 중 최대값 구하고
// 2. 삼각형 가능 여부 판별 (삼각형의 가장 긴 변의 길이는 나머지 두 변의 길이보다 크거나 같을 수 없다.)
function solution2(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);

  if (sum - max > max) {
    return 'YES';
  } else {
    return 'NO';
  }
}

let a = 6;
let b = 7;
let c = 11;

console.log(solution1(a, b, c));
console.log(solution2(a, b, c));

a = 13;
b = 33;
c = 17;

console.log(solution1(a, b, c));
console.log(solution2(a, b, c));
