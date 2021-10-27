function solution(arr) {
  let answer = [];
  // 전달받은 배열 깊은 복사 후 내림차순으로 정렬
  let sortArr = arr.slice().sort((a, b) => a - b);

  // 기존 배열과 정렬된 배열 비교
  for (let i = 0; i < arr.length; i++) {
    // 만약 같지 않다면
    if (arr[i] !== sortArr[i]) {
      // 결과값 배열에 넣기
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];

console.log(solution(arr1));
console.log(solution(arr2));
