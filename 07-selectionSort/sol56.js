function solution(meeting) {
  // 최대로 진행 가능한 수
  let maxCnt = 0;

  // 미팅 배열 정렬
  meeting.sort((a, b) => {
    // 만약 끝나는 시간이 같다면
    if (a[1] === b[1]) {
      // 시작 시간을 기준으로 내림차순 정렬
      return a[0] - b[0];
    }
    // 만약 끝나는 시간이 같지 않다면
    else {
      // 끝나는 시간을 기준으로 내림차순 정렬
      return a[1] - b[1];
    }
  });

  // 현재 미팅 끝나는 시간
  let et = 0;

  // 미팅 배열 순회
  for (let m of meeting) {
    // 다음 미팅의 시작시간이 현재 미팅의 끝나는 시간보다 작거나 같다면
    if (et <= m[0]) {
      // 미팅 가능 횟수 1 증가
      maxCnt++;
      // 현재 미팅 끝나는 시간을 다음 미팅의 끝나는 시간으로 변경
      et = m[1];
    }
  }

  return maxCnt;
}

let meeting = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

console.log(solution(meeting));

meeting = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(meeting));
