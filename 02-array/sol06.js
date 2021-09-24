function solution1(arr) {
  let answer;
  let N = arr.length;
  let max = Number.MIN_SAFE_INTEGER;
  let sumLCross = 0;
  let sumRCross = 0;

  for (let i = 0; i < N; i++) {
    let sumRow = 0;
    let sumColumn = 0;

    for (let j = 0; j < N; j++) {
      sumRow += arr[i][j];
      sumColumn += arr[j][i];
    }

    sumLCross += arr[i][i];
    sumRCross += arr[i][N - 1 - i];

    max = Math.max(sumRow, sumColumn, max);
  }

  max = Math.max(sumLCross, sumRCross, max);
  answer = max;

  return answer;
}

function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution1(arr));
console.log(solution2(arr));
