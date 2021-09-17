function solution(n, m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(i, scoreSum, timeSum) {
    // 시간이 초과하면 함수 종료
    if (timeSum > m) {
      return;
    }

    if (i === n) {
      // 최대 점수 값을 answer 변수에 넣기
      answer = Math.max(answer, scoreSum);
    } else {
      // 현재 문제를 풀었을 경우
      DFS(i + 1, scoreSum + ps[i], timeSum + pt[i]);
      // 현재 문제를 풀지 않았을 경우
      DFS(i + 1, scoreSum, timeSum);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

let n = 5;
let m = 20;
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];

console.log(solution(n, m, ps, pt));
