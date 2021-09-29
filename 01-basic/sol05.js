// Solution 1
// 1. for 문을 사용해 배열에 들어있는 숫자 탐색
// 2. if 문을 통해 현재 최소값보다 작은 값이 나오면 최소값 교체

function solution1(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

// Solution 2
// 1. for 문을 사용해 배열에 들어있는 숫자 탐색
// 2. if 문을 통해 현재 최소값보다 작은 값이 나오면 최소값 교체

function solution2(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let n of arr) {
    if (n < min) {
      min = n;
    }
  }

  return min;
}

// Solution 3
// 1. Math.min() 메서드와 전개 구문을 사용해 배열 안의 숫자들 중 최소값을 가져오기

function solution3(arr) {
  const min = Math.min(...arr);

  return min;
}

// Solution 4
// 1. Math.min.apply() 메서드를 사용해 배열 안의 숫자들 중 최소값을 가져오기

function solution4(arr) {
  const min = Math.min.apply(null, arr);

  return min;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution1(arr));
console.log(solution2(arr));
console.log(solution3(arr));
console.log(solution4(arr));
