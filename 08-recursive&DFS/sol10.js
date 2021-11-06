function solution(n, m, arr) {
  let answer = [];
  // 사용 여부 체크하는 배열
  let ch = Array.from({ length: n }, () => 0);
  // 임시로 값을 담을 배열
  let tmp = Array.from({ length: m }, () => 0);

  // 깊이 우선 탐색 이용
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let n = 3;
let m = 2;
let arr = [3, 6, 9];

console.log(solution(n, m, arr));
