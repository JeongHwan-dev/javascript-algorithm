function solution() {
  // 배열 얕은 복사
  let answer = arr;

  // 배열 요구사항에 맞게 정렬
  arr.sort((a, b) => {
    // 만약 x 좌표가 같다면
    if (a[0] === b[0]) {
      // y 좌표로 정렬
      return a[1] - b[1];
    }
    // 만약 x 좌표가 같지 않다면
    else {
      // x 좌표로 정렬
      return a[0] - b[0];
    }
  });

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
