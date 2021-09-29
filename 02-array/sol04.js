// Solution 1
// 1. 총 점수 변수 totalScore, 현재 점수 배점 변수 score 를 0 으로 초기화
// 2. for 문을 사용해 marking 배열 요소 탐색
// 3. if 문을 사용해 배열 요소가 1 이면 배점을 +1 올리고 총 점수에 더하기
// 4. 만약 배열 요소가 0 이면 배점을 0 으로 초기화

function solution1(marking) {
  let totalScore = 0;
  let score = 0;

  for (let value of marking) {
    if (value === 1) {
      score++;
      totalScore += score;
    } else {
      score = 0;
    }
  }

  return totalScore;
}

// Solution 2
// 1. 총 점수 변수 totalScore, 현재 점수 배점 변수 score 를 0 으로 초기화
// 2. forEach() 메서드를 사용해 marking 배열 요소 탐색
// 3. if 문을 사용해 배열 요소가 1 이면 배점을 +1 올리고 총 점수에 더하기
// 4. 만약 배열 요소가 0 이면 배점을 0 으로 초기화

function solution2(marking) {
  let totalScore = 0;
  let score = 0;

  marking.forEach((value) => {
    if (value === 1) {
      score++;
      totalScore += score;
    } else {
      score = 0;
    }
  });

  return totalScore;
}

// Solution 3
// 1. 총 점수 변수 totalScore, 현재 점수 배점 변수 score 를 0 으로 초기화
// 2. reduce() 메서드를 사용해 marking 배열 요소를 확인하고 점수 누적
// 3. if 문을 사용해 배열 요소가 1 이면 배점을 +1 올리고 총 점수에 더하기
// 4. 만약 배열 요소가 0 이면 배점을 0 으로 초기화

function solution3(marking) {
  let score = 0;
  const totalScore = marking.reduce((acc, cur) => {
    if (cur === 1) {
      score++;
    } else {
      score = 0;
    }

    return acc + score;
  });

  return totalScore;
}

let marking = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution1(marking));
console.log(solution2(marking));
console.log(solution3(marking));
