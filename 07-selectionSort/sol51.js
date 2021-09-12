function solution1(arr) {
  let answer = arr;

  // 버블정렬
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 현재 값이 양수이고 다음 값이 음수 일 때
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // 교체
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

function solution2(arr) {
  let answer = [];
  let posNums = []; // 양수 숫자 배열
  let negNums = []; // 음수 숫자 배열

  // 배열 탐색
  for (let i = 0; i < arr.length; i++) {
    // 숫자가 양수이면
    if (arr[i] > 0) {
      // 양수 숫자 배열에 push
      posNums.push(arr[i]);
    }
    // 숫자가 음수이면
    else {
      // 음수 숫자 배열에 push
      negNums.push(arr[i]);
    }
  }

  // spread operator 사용하여 음수 배열 + 양수 배열 합치기
  answer = [...negNums, ...posNums];

  // 다른 방법 : concat() 메서드 사용하여 두 배열 합치기
  // answer = negNums.concat(posNums);

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution1(arr));
console.log(solution2(arr));
