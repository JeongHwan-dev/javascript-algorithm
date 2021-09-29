// Solution 1
// 1. 맨 앞에 있는 학생은 무조건 선생님을 볼 수 있으므로 카운트 값을 1에서 시작
// 2. 초기 가장 큰 키의 값을 맨 앞의 학생 키로 설정
// 3. for 문을 사용해 배열 안의 모든 학생들의 키 탐색
// 4. if 문을 이용해 가장 큰 키의 값보다 더 큰 키를 가진 학생이 있는지 확인
// 5. 만약 있다면 카운트 값을 +1 하고 가장 큰 키의 값을 현재 학생의 키 값으로 변경

function solution1(students) {
  let count = 1;
  let maxHeight = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i] > maxHeight) {
      count++;
      maxHeight = students[i];
    }
  }

  return count;
}

// Solution 2
// 1. 맨 앞에 있는 학생은 무조건 선생님을 볼 수 있으므로 카운트 값을 1에서 시작
// 2. 초기 가장 큰 키의 값을 맨 앞의 학생 키로 설정
// 3. forEach() 메서드를 사용해 배열 안의 모든 학생들의 키 탐색
// 4. if 문을 이용해 가장 큰 키의 값보다 더 큰 키를 가진 학생이 있는지 확인
// 5. 만약 있다면 카운트 값을 +1 하고 가장 큰 키의 값을 현재 학생의 키 값으로 변경

function solution2(students) {
  let count = 1;
  let maxHeight = students[0];

  students.forEach((height) => {
    if (height > maxHeight) {
      count++;
      maxHeight = height;
    }
  });

  return count;
}

// Solution 3
// 1. 맨 앞에 있는 학생은 무조건 선생님을 볼 수 있으므로 카운트 값을 1에서 시작
// 2. 초기 가장 큰 키의 값을 맨 앞의 학생 키로 설정
// 3. filter() 메서드를 사용해 배열 안에서 인덱스가 0이거나 탐색 당시 가장 큰 키 값보다 큰 키를 가진 학생들만 이루어진 새 배열 생성
// 4. filter() 메서드를 사용해 만든 새 배열의 길이는 즉 선생님을 볼 수 있는 학생들의 수

function solution3(students) {
  let maxHeight = students[0];
  const count = students.filter((height, index) => {
    if (index === 0) {
      return true;
    }

    if (height > maxHeight) {
      maxHeight = height;
      return true;
    }
  }).length;

  return count;
}

let students = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution1(students));
console.log(solution2(students));
console.log(solution3(students));
