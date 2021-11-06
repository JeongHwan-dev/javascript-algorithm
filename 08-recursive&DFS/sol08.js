function solution(n, m) {
  let answer = [];
  // 길이가 m 인 배열을 0으로 초기화 시켜서 생성
  let tmp = Array.from({ length: m }, () => 0);

  // 깊이 우선 탐색 이용
  function DFS(L) {
    // m개를 만족했을 때
    if (L === m) {
      // 깊은 복사해서 answer 배열에 넣기
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

let n = 4;
let m = 3;

console.log(solution(n, m));
