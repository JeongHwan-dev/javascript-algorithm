// Solution 1
// 1. 최소거리 값을 담을 빈 배열 result와 t 값의 위치를 담을 빈 배열 arr 생성
// 2. for 문과 if 문을 사용해 t 가 있는 인덱스를 arr 배열에 넣기
// 3. for 문을 돌면서 arr 배열에 들어있는 t 위치들 중 가장 가까운 값과의 거리를 계산하여 최소값을 결과 배열에 넣기

function solution1(s, t) {
  const result = [];
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      arr.push(i);
    }
  }

  for (let j = 0; j < s.length; j++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (const idx of arr) {
      if (min > Math.abs(j - idx)) {
        min = Math.abs(j - idx);
      }
    }

    result[j] = min;
  }

  return result;
}

// Solution 2
// 1. 최소거리 값을 담을 빈 배열 result 생성
// 2. gap 변수에 1000 할당
// 3. for 문을 돌면서 s 문자열을 탐색하고 만약 t 문자가 나오면 gap 을 0으로 초기화 그렇지 않으면 gap 값을 +1 씩 증가
// 4. if 문을 통과한 후 result에 현재 gap 값을 넣기
// 5. s 문자열을 왼쪽부터 오른쪽까지 탐색이 끝나면 다시 gap을 1000으로 초기화
// 6. s 문자열의 오른쪽부터 왼쪽까지 다시 for문을 통해 이전 과정 반복
// 7. if 문을 통해 이전 result 배열에 들어있는 거리 값과 비교하면서 만약 더 최소 거리가 있다면 result 배열 요소를 변경

function solution2(s, t) {
  const result = [];
  let gap = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      gap = 0;
    } else {
      gap++;
    }

    result[i] = gap;
  }

  gap = 1000;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      gap = 0;
      result[j] = gap;
    } else {
      gap++;

      if (result[j] > gap) {
        result[j] = gap;
      }
    }
  }

  return result;
}

// Solution 3
// 1. 최소거리 값을 담을 빈 배열 result 생성
// 2. gap 변수에 1000 할당
// 3. for 문을 돌면서 s 문자열을 탐색하고 만약 t 문자가 나오면 gap 을 0으로 초기화 그렇지 않으면 gap 값을 +1 씩 증가
// 4. if 문을 통과한 후 result에 현재 gap 값을 넣기
// 5. s 문자열을 왼쪽부터 오른쪽까지 탐색이 끝나면 다시 gap을 1000으로 초기화
// 6. s 문자열의 오른쪽부터 왼쪽까지 다시 for문을 통해 이전 과정 반복
// 7. Math.min() 메서들를 사용해 이전 result 배열에 들어있는 거리 값과 비교하면서 만약 더 최소 거리가 있다면 result 배열 요소를 변경

function solution3(s, t) {
  let answer = [];
  let p = 1000;

  for (let c of s) {
    if (c === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

// Solution 4
// 1. split() 메서드를 사용해 s 문자열을 문자 단위로 쪼개어 배열로 반환
// 2. 길이가 splittedS 배열과 동일한 최소거리 정보들을 담을 result 배열을 생성하고 모든 요소를 0으로 초기화
// 3. 최초 t 의 위치 인덱스를 indexOf() 메서드를 사용하여 tPos 변수에 할당
// 4. for 문을 사용해 배열을 탐색하며 현재 t 와의 거리 값을 해당 result 배열 요소 갱신, 만약 새로운 t 요소가 발견되면 t의 위치 변경
// 5. 위와 같은 방법을 방향을 바꾸어 다시 한번 반복
// 6. result 배열 요소를 갱신할 때 이전 result 배열 요소에 담긴 거리 값과 현재 거리 값 중 최소값으로 갱신

function solution4(s, t) {
  const splittedS = s.split('');
  const result = Array.from({ length: splittedS.length }, () => 0);
  let tPos = s.indexOf(t);

  for (let i = 0; i < splittedS.length; i++) {
    if (splittedS[i] === t) {
      tPos = i;
    }

    result[i] = Math.abs(i - tPos);
  }

  for (let j = splittedS.length - 1; j >= 0; j--) {
    if (splittedS[j] === t) {
      tPos = j;
    }

    result[j] = Math.min(result[j], Math.abs(j - tPos));
  }

  return result;
}

let s = 'teachermode';
let t = 'e';

console.log(solution1(s, t));
console.log(solution2(s, t));
console.log(solution3(s, t));
console.log(solution4(s, t));
