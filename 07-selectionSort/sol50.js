function solution(arr) {
  let answer = arr; // 얕은 복사

  // 버블정렬
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 앞에 값이 더 작으면
      if (arr[j] > arr[j + 1]) {
        // 교체
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
