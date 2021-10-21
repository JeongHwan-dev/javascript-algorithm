// Solution 1
// 1. 가장 긴 단어를 담을 longestWord 변수를 빈 문자열로 초기화
// 2. for 문을 사용해 단어 배열 안의 단어들을 탐색
// 3. 현재 가장 긴 단어 길이보다 더 긴 단어가 있다면
// 4. 가장 긴 단어 교체
function solution1(words) {
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Solution 3
// 1. 가장 긴 단어를 담을 longestWord 변수를 빈 문자열로 초기화
// 2. forEach() 메스드를 사용해 단어 배열 안의 단어들을 탐색
// 3. 현재 가장 긴 단어 길이보다 더 긴 단어가 있다면
// 4. 가장 긴 단어 교체
function solution2(words) {
  let longestWord = '';

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

let words = ['teacher', 'time', 'student', 'beautiful', 'good'];

console.log(solution1(words));
console.log(solution2(words));
