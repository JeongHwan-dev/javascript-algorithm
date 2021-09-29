// Solution 1
// 1. 중복된 문자가 제거된 문자열을 담을 removedStr 변수 빈 문자열로 초기화
// 2. split() 메서드를 사용해 문자열을 문자 단위로 쪼개어 새 배열 생성
// 3. for 문을 통해 배열 안의 문자들을 탐색
// 4. 만약 result 배열에 들어있지 않은 문자가 있다면
// 5. removedStr 변수와 result 배열에 추가

function solution1(str) {
  let removedStr = '';
  const arr = str.split('');
  const result = [];

  for (let c of arr) {
    if (result.indexOf(c) === -1) {
      removedStr += c;
      result.push(c);
    }
  }

  return answer;
}

// Solution 2
// 1. 중복된 문자가 제거된 문자열을 담을 removedStr 변수 빈 문자열로 초기화
// 3. for 문을 통해 배열 안의 문자들을 탐색
// 4. 만약 indexOf() 메서드를 사용해 얻은 인덱스와 현재 인덱스 값이 동일하다면
// 5. removedStr 변수에 해당 문자를 추가

function solution2(str) {
  let removedStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      removedStr += str[i];
    }
  }

  return removedStr;
}

// Solution 3
// 1. 문자열을 Set 객채로 만들어 중복된 문자가 제거하고 전개 연산자를 통해 다시 새 배열로 생성
// 2. join() 메서드를 이용해 배열 안의 요소들을 모두 조인시켜 하나의 문자열로 반환

function solution3(str) {
  const removedStr = [...new Set(str)].join('');

  return removedStr;
}

console.log(solution1('ksekkset'));
console.log(solution2('ksekkset'));
console.log(solution3('ksekkset'));
