// 이분검색 이용한 솔류션
function solution(target, arr) {
  let answer;
  let lt = 0;
  let rt = arr.length - 1;

  // 배열을 숫자를 기준으로 오름차순으로 정렬
  arr.sort((a, b) => a - b);

  // 왼쪽 타겟 위치가 오른쪽 타겟 위치보다 작거나 같을 때까지 반복
  while (lt <= rt) {
    // 왼쪽 타겟 위치와 오른쪽 타겟 위치의 중앙 위치 계산
    let mid = parseInt((lt + rt) / 2);

    // 만약 계산한 중앙값이 타겟 값을 경우
    if (arr[mid] === target) {
      // answer에 몇 번째 수인지 할당 후 반복 종료
      answer = mid + 1;
      break;
    }
    // 만약 계산한 중앙값보다 타겟 값이 작다면
    else if (arr[mid] > target) {
      // 오른쪽 타겟 위치를 중앙 위치 -1 로 변경
      rt = mid - 1;
    }
    // 만약 계산한 중앙값보다 타겟 값이 크다면
    else {
      // 왼쪽 타겟 위치를 중앙 위치 +1 로 변경
      lt = mid + 1;
    }
  }

  return answer;
}

let target = 32;
let arr = [23, 81, 65, 12, 57, 32, 99, 81];

console.log(solution(target, arr));
