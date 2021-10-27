function solution1(size, arr) {
  // 크기가 size인 배열을 0으로 초기화하여 생성
  let answer = Array.from({ length: size }, () => 0);

  // 작업 배열 하나씩 반복
  arr.forEach((e) => {
    // 초기 작업 위치 초기화
    let pos = -1;

    // 해야할 작업이 캐시에 있는 상태인지 확인
    for (let i = 0; i < size; i++) {
      // 만약 있다면
      if (e === answer[i]) {
        // 그 인덱스 값을 작업 위치 변수에 할당
        pos = i;
      }
    }

    // 만약 해야할 작업이 캐시에 없다면
    if (pos === -1) {
      // 모든 작업을 한 칸씩 뒤로 밀기
      for (let i = size - 1; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // 만약 해야할 작업이 캐시에 있다면
    else {
      // 캐시의 작업 위치 앞에 있는 값들을 한 칸씩 당기기
      for (let i = pos; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
    }

    //  캐시의 첫 번째 값에 다음 작업 넣기
    answer[0] = e;
  });

  return answer;
}

function solution2(size, arr) {
  // 크기가 size인 배열을 0으로 초기화하여 생성
  let answer = Array.from({ length: size }, () => 0);

  // 작업 배열 하나씩 반복
  arr.forEach((e) => {
    // 초기 작업 위치 초기화
    let pos = -1;

    // 해야할 작업이 캐시에 있는 상태인지 확인
    for (let i = 0; i < size; i++) {
      // 만약 있다면
      if (e === answer[i]) {
        // 그 인덱스 값을 작업 위치 변수에 할당
        pos = i;
      }
    }

    // 만약 해야할 작업이 캐시에 없다면
    if (pos === -1) {
      //  캐시의 첫 번째 값에 다음 작업 넣기
      answer.unshift(e);

      // 만약 캐시 크기가 지정된 크기보다 커진다면
      if (answer.length > size) {
        // 캐시 맨 뒤에 위치하는 값 pop
        answer.pop();
      }
    }
    // 만약 해야할 작업이 캐시에 있다면
    else {
      // 캐시에 있는 그 작업을 배열에서 제거
      answer.splice(pos, 1);
      //  캐시의 첫 번째 값에 다음 작업 넣기
      answer.unshift(e);
    }
  });

  return answer;
}

let size = 5;
let n = 9;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution1(size, arr));
console.log(solution2(size, arr));
