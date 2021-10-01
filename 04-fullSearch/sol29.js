// Solution 1
// 1. 자릿수 합의 최대인 숫자를 담을 maxSumNum 변수 생성
// 2. 자리수 합의 최대값을 담을 maxSum 변수를 MIN_SAFE_INTEGER 으로 초기화
// 3. for 문과 while 문을 사용해 배열에 들어있는 숫자 요소들의 자릿 수 합을 구하고
// 4. 만약 현재 자리수 합 최대값보다 크다면 maxSum과 maxSumNum을 교체
// 5. 만약 maxSum 과 현재 수의 자리수 합이 같다면 실제 값이 더 큰 숫자로 maxSumNum 을 변경

function solution1(arr) {
  let maxSumNum;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (const num of arr) {
    let sum = 0;
    let tmp = num;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (maxSum < sum) {
      maxSum = sum;
      maxSumNum = num;
    } else if (maxSum == sum) {
      if (maxSumNum < num) {
        maxSumNum = num;
      }
    }
  }

  return maxSumNum;
}

// Solution 2
// 1. 자릿수 합의 최대인 숫자를 담을 maxSumNum 변수 생성
// 2. 자리수 합의 최대값을 담을 maxSum 변수를 MIN_SAFE_INTEGER 으로 초기화
// 3. for 문과 arr 배열에 들어있는 숫자 요소들 탐색
// 4. toString() 메서드로 숫자를 문자열 타입으로 변경 후
// 5. split() 메서드를 사용하여 문자열을 문자 단위로 쪼개어 새 배열을 만든 뒤
// 6. 만든 배열의 요소들을 reduce() 메서드와 Number() 메서드를 활용해 숫자로 변경하여 요소 전체 합을 반환
// 7. 만약 현재 자리수 합 최대값보다 크다면 maxSum과 maxSumNum을 교체
// 8. 만약 maxSum 과 현재 수의 자리수 합이 같다면 실제 값이 더 큰 숫자로 maxSumNum 을 변경

function solution2(arr) {
  let maxSumNum;
  let max = Number.MIN_SAFE_INTEGER;

  for (const num of arr) {
    const sum = num
      .toString()
      .split('')
      .reduce((acc, curr) => acc + Number(curr), 0);

    if (max < sum) {
      max = sum;
      maxSumNum = num;
    } else if (max === sum) {
      if (maxSumNum < num) {
        maxSumNum = num;
      }
    }
  }

  return maxSumNum;
}

// Solution 3
// 1. 자릿수 합의 최대인 숫자를 담을 maxSumNum 변수를 0으로 초기화
// 2. 자리수 합의 최대값을 담을 maxSum 변수를 MIN_SAFE_INTEGER 으로 초기화
// 3. forEach() 메서드를 사용하여 arr 배열에 들어있는 숫자 요소들 탐색
// 4. 자리수의 합을 구해 반환하는 함수 getSum() 함수 구현
// 5. getSum() 메서드를 사용해 현재 숫자값의 자리수 합 구하기
// 6. 만약 현재 자리수 합 최대값보다 크다면 maxSum과 maxSumNum을 교체
// 7. 만약 maxSum 과 현재 수의 자리수 합이 같다면 실제 값이 더 큰 숫자로 maxSumNum 을 변경

function getSum(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function solution3(arr) {
  let maxSumNum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  arr.forEach((number) => {
    const sum = getSum(number);

    if (maxSum < sum) {
      maxSumNum = number;
      maxSum = sum;
    } else if (maxSum === sum) {
      if (maxSumNum < number) {
        maxSumNum = number;
      }
    }
  });

  return maxSumNum;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution1(arr));
console.log(solution2(arr));
console.log(solution3(arr));
