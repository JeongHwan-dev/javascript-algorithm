function solution(n) {
  let answer = [];
  // 해당 값이 체크 되었는지 유무를 표기하는 배열
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';

      // 체크된 값들 확인
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) {
          tmp += i + ' ';
        }
      }

      // 공집합이 아닌 경우만
      if (tmp.length > 0) {
        // trim() 메서드 이용해 문자열 양 끝의 공백을 제거 후 결과 배열에 넣기
        answer.push(tmp.trim());
      }
    } else {
      // 현재 값을 체크
      check[v] = 1;
      DFS(v + 1);
      // 현재 값을 미체크
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

let n = 3;

console.log(solution(n));
