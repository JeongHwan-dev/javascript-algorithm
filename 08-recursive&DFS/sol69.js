function solution(n, arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  // 깊이 우선 탐색 이용
  function DFS(L, sum) {
    // 합계 값이 목표 값보다 커질 경우 함수 종료
    if (sum > m) {
      return;
    }

    // 동전 사용 개수가 현재 최소 동전 사용 개수보다 커질 경우 함수 종료
    if (L > answer) {
      return;
    }

    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

let n = 3;
let arr = [1, 2, 5];
let m = 15;

console.log(solution(n, arr, m));
