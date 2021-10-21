// Solution 1
// 투포인터 방식을 이용한 솔루션
function solution1(k, arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let rt = k;

  for (let lt = 0; lt < arr.length - k; lt++) {
    let sum = 0;

    for (let i = lt; i < lt + rt; i++) {
      sum += arr[i];
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// Solution 2
// 슬라이딩 윈도우 방식을 이용한 솔루션
function solution2(k, arr) {
  let maxSum;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  maxSum = sum;

  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// Solution 3
// slice(), reduce() 메서드를 활용한 솔루션
function solution3(k, arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - k; i++) {
    const part = arr.slice(i, i + k);
    const sum = part.reduce((acc, cur) => acc + cur, 0);

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let k = 3;
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution1(k, arr));
console.log(solution2(k, arr));
console.log(solution3(k, arr));
