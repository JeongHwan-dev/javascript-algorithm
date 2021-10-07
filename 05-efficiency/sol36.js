// Solution 1
// 1. m 값이 만들어지는 연속부분수열 개수를 카운트할 count 변수를 0으로 초기화하여 생성
// 2. 연속부분수열의 합을 저장할 sum 함수 0으로 초기화
// 3. 투 포인터 중 start 값을 0으로 초기화
// 4. for 문을 사용한 투포인터로 sum 값이 m 값과 동일할 때 count 를 +1 증가시키고
// 5. while 문을 사용해 sum 값이 m값 보다 작을 때까지 start 포인터가 가리키는 값을 빼주고
// 6. sum이 m값과 같은지 확인 후 같다면 count 를 +1 증가

function solution(m, arr) {
  let count = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (sum === m) {
      count++;
    }

    while (sum >= m) {
      sum -= arr[start++];

      if (sum === m) {
        count++;
      }
    }
  }

  return count;
}

let m = 6;
let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(m, arr));
