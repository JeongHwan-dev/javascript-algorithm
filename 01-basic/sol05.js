function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

function solution2(arr) {
  let answer = Math.min(...arr);

  return answer;
}

function solution3(arr) {
  let answer = Math.min.apply(null, arr);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));
console.log(solution2(arr));
console.log(solution3(arr));
