function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(i, sum) {
    // 만약 무게를 초과한다면 함수 종료
    if (sum > c) {
      return;
    }

    if (i === n) {
      // 더 큰 무게를 answer에 넣기
      answer = Math.max(answer, sum);
    } else {
      // 현재 무게를 포함
      DFS(i + 1, sum + arr[i]);
      // 현재 무게를 미포함
      DFS(i + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let c = 259;
let arr = [81, 58, 42, 33, 61];

console.log(solution(c, arr));
