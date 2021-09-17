// 재귀함수를 이용한 솔루션
function solution(n) {
  let answer = '';

  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }

  DFS(n);

  return answer;
}

let n = 11;

console.log(solution(n));
