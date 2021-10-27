// 삽입정렬 사용
function solution(arr) {
  // 배열 얕은 복사
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]; // 현재 값
    let j;

    // 현재의 값보다 앞 인덱스에 위치 한 값들 탐색
    for (j = i - 1; j >= 0; j--) {
      // 만약 현재 값보다 더 큰 값이 있다면
      if (arr[j] > tmp) {
        // 위치 변경
        arr[j + 1] = arr[j];
      }
      // 더 작다면
      else {
        // 반복문 종료
        break;
      }
    }

    // 반복문 종료된 위치에서 +1 인덱스 자리에 현재 값 넣기
    arr[j + 1] = tmp;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];

console.log(solution(arr));
