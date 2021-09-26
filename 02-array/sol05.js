// Solution 1
// 1. 등수 정보를 담은 새 빈 배열 생성
// 2. slice() 메서드를 사용해 scores 배열 깊은 복사
// 3. sort() 메서드를 사용해 _scores 배열을 내림차순으로 정렬
// 4. for 문과 indexOf() 메서드를 사용해 sortedScores 배열의 인덱스 위치를 이용하여 등수를 도출하여 rank 배열에 넣기
function solution1(scores) {
  const rank = [];
  const _scores = scores.slice();
  const sortedScores = _scores.sort((a, b) => b - a);

  for (const score of scores) {
    rank.push(sortedScores.indexOf(score) + 1);
  }

  return rank;
}

// Solution 2
// 1. 등수 정보를 담은 새 빈 배열 생성
// 2. 이중 for 문을 통해 현재 점수보다 높은 점수가 확인 될 때마다 currentRank 를 올리고
// 3. 안쪽 for 문 하나가 끝나면 그 currentRank 를 rank 배열에 넣기
function solution2(scores) {
  const rank = [];

  for (const score1 of scores) {
    let currentRank = 1;

    for (const score2 of scores) {
      if (score1 < score2) {
        currentRank++;
      }
    }

    rank.push(currentRank);
  }

  return rank;
}

// Solution 3
// 1. scores 배열의 길이를 n 변수에 할당
// 2. 길이가 n 이고 모든 요소가 1로 초기화된 rank 배열 생성
// 3. 이중 for 문을 이용해 각 인덱스 요소의 등수를 도출
function solution3(scores) {
  const n = scores.length;
  const rank = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (scores[i] < scores[j]) {
        rank[i]++;
      }
    }
  }

  return rank;
}

// Solution 4
// 1. slice() 메서드를 사용해 scores 배열을 깊은 복사
// 2. sort() 메서드를 사용해 _scores 를 내림차순으로 정렬하고 sortedScores에 참조
// 3. map() 메서드를 사용하여 정렬된 점수 배열의 인덱스를 통해 등수를 얻어 새 배열 생성
function solution4(scores) {
  const _scores = scores.slice();
  const sortedScores = _scores.sort((a, b) => b - a);
  const rank = scores.map((score) => sortedScores.indexOf(score) + 1);

  return rank;
}

let scores = [87, 89, 92, 100, 76];

console.log(solution1(scores));
console.log(solution2(scores));
console.log(solution3(scores));
console.log(solution4(scores));

scores = [92, 92, 92, 100, 76];

console.log(solution1(scores));
console.log(solution2(scores));
console.log(solution3(scores));
console.log(solution4(scores));
