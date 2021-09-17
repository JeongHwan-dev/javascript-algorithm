function solution(arr) {
  let answer = 'NO';
  // 조건에 해당하는 두 부분집합의 존재를 판단하는 변수
  let flag = false;
  // 주어진 배열 안에 있는 모든 수들의 합
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  // 주어진 배열의 길이
  let n = arr.length;

  function DFS(i, sum) {
    // 조건에 해당하는 두 부분집합을 찾으면 함수 종료
    if (flag) {
      return;
    }

    if (i === n) {
      if (total - sum === sum) {
        answer = 'YES';
        falg = true;
      }
    } else {
      // 현재 값을 더해서 다음 DFS() 호출
      DFS(i + 1, sum + arr[i]);
      // 현재 값을 더하지 않고 다음 DFS() 호출
      DFS(i + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(arr));
