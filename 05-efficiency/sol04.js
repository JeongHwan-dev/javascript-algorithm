// Solution 1
// 1. 조건에 맞는 연속 부분수열을 카운트할 count 변수를 0으로 초기화
// 2. 연속 부분수열의 합을 할당할 sum 변수에 0으로 초기화
// 3. 투 포인터 중 왼쪽 포인터 위치를 0으로 초기화
// 4. for 문을 사용하여 오른쪽 포인터 rt 를 움직이며 m 값을 넘지 않는 부분 수열 개수를 확인
// 5. 만약 sum 값이 m 값을 넘으면 lt 포인터를 당기고 그 값만큼 sum에서 감소시켜 sum 값이 m 이하가 되도록 한다.

function solution(m, arr) {
  let count = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt++];
    }

    count += rt - lt + 1;
  }

  return count;
}

let m = 5;
let arr = [1, 3, 1, 2, 3];

console.log(solution(m, arr));
