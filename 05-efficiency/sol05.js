function solution1(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let rt = k;

  for (let lt = 0; lt < arr.length - k; lt++) {
    let sum = 0;

    for (let i = lt; i < lt + rt; i++) {
      sum += arr[i];
    }

    answer = Math.max(answer, sum);
  }

  return answer;
}

function solution2(k, arr) {
  let answer;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  answer = sum;

  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let k = 3;
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution1(k, arr));
console.log(solution2(k, arr));
