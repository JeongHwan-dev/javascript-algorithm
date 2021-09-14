function solution(times) {
  // 최대 인원
  let maxCnt = Number.MIN_SAFE_INTEGER;
  // 타임라인
  let T_line = [];

  // 타임 배열에 있는 값을 도착 시간과 떠나는 시간을 구분하여 타임라인에 넣기
  for (let t of times) {
    T_line.push([t[0], 's']);
    T_line.push([t[1], 'e']);
  }

  // 타임라인 정렬
  T_line.sort((a, b) => {
    // 만약 타임이 같다면
    if (a[0] === b[0]) {
      // 떠나는 시간이 도착 시간보다 먼저 앞에 오도록 정렬
      return a[1].charCodeAt() - b[1].charCodeAt();
    }
    // 만약 타임이 같지 않다면
    else {
      // 타임 기준으로 오름차순 정렬
      return a[0] - b[0];
    }
  });

  // 현재 시간의 인원 수
  let cnt = 0;

  // 반복문을 통해 타임라인 배열에 있는 인원 체크
  for (let t of T_line) {
    // 도착 시간일 경우
    if (t[1] === 's') {
      // 인원수 +1
      cnt++;
    }
    // 떠나는 시간일 경우
    else {
      // 인원수 -1
      cnt--;
    }

    // 최대 인원 수 갱신
    maxCnt = Math.max(maxCnt, cnt);
  }

  return maxCnt;
}

let times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(times));
