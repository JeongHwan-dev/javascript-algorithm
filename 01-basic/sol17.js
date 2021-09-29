// Solution 1
// 1. 중복된 단어들이 제거된 배열을 담을 새 배열 생성
// 2. for 문을 사용해 단어 배열의 요소들을 탐색
// 3. 만약 deduplicationWords 안에 없는 단어가 있다면 deduplicationWords 배열에 추가

function solution1(words) {
  const deduplicationWords = [];

  for (const word of words) {
    if (deduplicationWords.indexOf(word) === -1) {
      deduplicationWords.push(word);
    }
  }

  return deduplicationWords;
}

// Solution 2
// 1. filter() 메서드를 이용해 words 배열 안에 있는 요소들이 indexOf() 메서드로 반환된 인덱스와 현재 인덱스가 같은지 확인
// 2. 만약 같다면 true를 리턴하여 true인 value들만 새 배열에 추가

function solution2(words) {
  const deduplicationWords = words.filter(
    (value, index) => words.indexOf(value) === index
  );

  return deduplicationWords;
}

// Solution 3
// 1. words 배열을 Set 객체로 만들어 중복을 제거하고
// 2. 전개 연산자를 사용해 다시 배열로 생성

function solution3(words) {
  const deduplicationWords = [...new Set(words)];

  return deduplicationWords;
}

let words = ['good', 'time', 'good', 'student'];

console.log(solution1(words));
console.log(solution2(words));
console.log(solution3(words));
