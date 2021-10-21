// Solution 1
// 1. 합의 최대값을 MIN_SAFE_INTEGER로 초기화
// 2. 격자판 길이 구하여 n 변수에 할당
// 3. 왼쪽 대각 라인 합, 오른쪽 대각 라인 합을 0으로 초기화
// 4. 이중 for 문을 사용해 가로 라인 합, 세로 라인 합 왼쪽 대각 라인 합, 오른쪽 대각 라인 합 구하기
// 5. Math.max() 메서드를 사용해 구한 라인 합들 중 최대값 도출하기
function solution1(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const n = arr.length;
  let sumLCross = 0;
  let sumRCross = 0;

  for (let i = 0; i < n; i++) {
    let sumRow = 0;
    let sumColumn = 0;

    for (let j = 0; j < n; j++) {
      sumRow += arr[i][j];
      sumColumn += arr[j][i];
    }

    sumLCross += arr[i][i];
    sumRCross += arr[i][n - 1 - i];

    maxSum = Math.max(sumRow, sumColumn, maxSum);
  }

  maxSum = Math.max(sumLCross, sumRCross, maxSum);

  return maxSum;
}

// Solution 2
// 1. 합의 최대값을 MIN_SAFE_INTEGER로 초기화
// 2. 격자판 길이 구하여 n 변수에 할당
// 3. 라인 합 변수 1,  라인 합 변수 2를 0으로 초기화
// 4. 이중 for 문을 사용해 가로 라인 합, 세로 라인 합 구하고 최대값 도출하기
// 5. 라인 합 변수 1,  라인 합 변수 2를 0으로 초기화
// 6. for 문을 이용해 왼쪽 대각 라인 합, 오른쪽 대각 라인 합 구하기
// 7. Math.max() 메서드를 사용해 기존 라인 합 최대값과 왼쪽 대각 라인 합, 오른쪽 대각 라인 합을 비교하여 최대값 구하기
function solution2(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    maxSum = Math.max(maxSum, sum1, sum2);
  }

  sum1 = sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }

  maxSum = Math.max(maxSum, sum1, sum2);

  return maxSum;
}

// Solution 3
// 1. 격자판 길이 구하여 n 변수에 할당
// 2. 라인 합들을 담을 sumArray 빈 배열 생성
// 3. 격자판의 x축과 y축을 뒤바꾼 새 2차원 배열 transposedArr 생성
// 4. reduce() 메서드를 사용하여 왼쪽 대각 라인 합 구하여 sumLCross 변수에 할당
// 5. reduce() 메서드를 사용하여 오른쪽 대각 라인 합 구하여 sumRCross 변수에 할당
// 6. arr 2차원 배열의 라인 별 합을 담은 배열을 반환하는 함수 getLineSum()을 이용하여 생성한 배열을 sumArray에 추가
// 7. transposedArr 2차원 배열의 라인 별 합을 담은 배열을 반환하는 함수 getLineSum()을 이용하여 생성한 배열을 sumArray에 추가
// 8. 왼쪽 대각 라인 합, 오른쪽 대각 라인 합도 전개 연산자를 사용하여 sumArray 배열에 추가
// 9. Math.max() 메서드와 전개 연산자를 사용하여 sumArray의 요소들 중 최대값을 반환
function transpose(matrix) {
  const transposedMatrix = matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

  return transposedMatrix;
}

function getLineSum(arr) {
  const lineSum = arr.map((line) => line.reduce((acc, cur) => acc + cur, 0));

  return lineSum;
}

function solution3(arr) {
  const n = arr.length;
  const sumArray = [];
  const transposedArr = transpose(arr);
  const sumLCross = arr.reduce((acc, cur, idx) => acc + cur[idx], 0);
  const sumRCross = arr.reduce((acc, cur, idx) => acc + cur[n - idx - 1], 0);

  sumArray.push(...getLineSum(arr));
  sumArray.push(...getLineSum(transposedArr));
  sumArray.push(...[sumLCross, sumRCross]);

  return Math.max(...sumArray);
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
console.log(solution3(arr));
