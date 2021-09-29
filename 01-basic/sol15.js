// Solution 1
// 1. 가운데 문자를 담을 centerChar 변수를 빈 문자열로 초기화
// 2. split() 메서드를 사용해서 단어를 문자 단위로 쪼개어 새 배열 생성
// 3. 만약 배열의 길이가 홀수라면 배열의 가운데 인덱스 요소을 centerChar에 넣기
// 4. 짝수라면 배열이 가운데 인덱스 요소와 그 이전 인덱스 요소를 centerChar에 넣기

function solution1(word) {
  let centerChar = '';
  const arr = word.split('');

  if (arr.length % 2 !== 0) {
    centerChar = arr[Number.parseInt(arr.length / 2)];
  } else {
    centerChar = arr[arr.length / 2 - 1] + arr[arr.length / 2];
  }

  return centerChar;
}

// Solution 2
// 1. 가운데 문자를 담을 centerChar 변수를 빈 문자열로 초기화
// 2. 단어의 중앙 위치 구하기
// 3. 만약 배열의 길이가 홀수라면 subString() 메서드를 사용해 배열의 가운데 인덱스 요소을 centerChar에 넣기
// 4. 짝수라면 subString() 메서드를 사용해 가운데 인덱스 이전 부터 가운데 인덱스까지의 요소를 centerChar에 넣기

function solution2(word) {
  let centerChar = '';
  const mid = Math.floor(word.length / 2);

  if (word.length % 2 !== 0) {
    centerChar = word.substring(mid, mid + 1);
  } else {
    centerChar = word.substring(mid - 1, mid + 1);
  }

  return centerChar;
}

// Solution 3
// 1. 단어의 중앙 위치 구하기
// 2. 삼항 연산자를 이용하여 단어가 짝수인지 홀수인지 판단
// 3. 짝수라면 substr() 메서드를 사용해 가운데 위치 이전 요소부터 문자 2개를 반환
// 4. 홀수라면 substr() 메서드를 사용해 가운데 위치의 문자 1개를 반환

function solution3(word) {
  const mid = Math.floor(word.length / 2);
  const centerChar =
    word.length % 2 === 0 ? word.substr(mid - 1, 2) : word.substr(mid, 1);

  return centerChar;
}

// Solution 4
// 1. 단어의 중앙 위치 구하기
// 2. 삼항 연산자를 이용하여 단어가 짝수인지 홀수인지 판단
// 3. 짝수라면 substring() 메서드를 사용해 가운데 위치 이전 요소부터 가운데 위치 요소까지 반환
// 4. 홀수라면 substring() 메서드를 사용해 가운데 위치의 문자 1개를 반환

function solution4(word) {
  const mid = Math.floor(word.length / 2);
  const centerChar =
    word.length % 2 === 0
      ? word.substring(mid - 1, mid + 1)
      : word.substring(mid, mid + 1);

  return centerChar;
}

let word = 'study';

console.log(solution1(word));
console.log(solution2(word));
console.log(solution3(word));
console.log(solution4(word));

word = 'good';

console.log(solution1(word));
console.log(solution2(word));
console.log(solution3(word));
console.log(solution4(word));
