// 재귀함수를 이용한 솔루션
function solution(n) {
  let answer = [];

  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(L - 1);
      answer.push(L);
    }
  }

  DFS(n);

  return answer;
}

let n = 3;

console.log(solution(n));
