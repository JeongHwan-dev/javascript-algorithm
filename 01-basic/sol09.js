// Solution 1
// 1. for문을 사용해 문자 한 개씩 탐색하고
// 2. if문을 사용해 문자가 'A'이면 '#'으로 변환단어 문자열에 더하고
// 3. 문자가 'A'가 아니라면 들어온 문자 그대로 변환단어 문자열에 더한다.

function solution1(word) {
  let convertedWord = '';

  for (let c of word) {
    if (c === 'A') {
      convertedWord += '#';
    } else {
      convertedWord += c;
    }
  }

  return convertedWord;
}

// Solution 2
// 1. split() 메서드를 사용해 단어를 문자 단위로 쪼개서 새 배열을 만들고
// 2. map() 메서드를 사용해 wordArray 배열의 요소 중 'A'를 모두 #으로 바꾼 후
// 3. join() 메서드를 사용해 변환된 새 배열의 요소들을 조인시켜 변환된 단어로 반환

function solution2(word) {
  const wordArray = word.split('');
  const convertedWord = wordArray.map((c) => (c === 'A' ? '#' : c)).join('');

  return convertedWord;
}

// Solution 3
// 1. replace() 메서드와 정규표현식을 사용해 문자에 들어있는 모든 'A'를 '#'으로 교체 후
// 2. 변환된 단어로 반환

function solution3(word) {
  const convertedWord = word.replace(/A/g, '#');

  return convertedWord;
}

let word = 'BANANA';

console.log(solution1(word));
console.log(solution2(word));
console.log(solution3(word));
