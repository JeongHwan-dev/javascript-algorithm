function solution1(arr) {
  let answer = arr.sort((a, b) => a - b);

  return answer;
}

function solution2(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return answer;
}

let n = 6;
let arr = [13, 5, 11, 7, 23, 15];

console.log(solution1(arr));
console.log(solution2(arr));
