// Solution 1
// 1. 결과값을 담을 변수 result에 'YES'로 초기화
// 2. 매개변수로 전달받은 str 문자열을 toLowerCase() 메서드를 사용하여 모두 소문자로 변환
// 3. 길이를 2로 나누고 Math.floor() 메서드 사용하여 문자열의 중앙 인덱스 구하기
// 4. for 문을 통해 중앙을 기준으로 앞 뒤 요소를 비교하기
// 5. 만약 요소가 같지 않다면 result 변수에 'NO'를 할당하고 반복문 종료

function solution1(str) {
  let result = 'YES';
  const lowerStr = str.toLowerCase();
  const len = lowerStr.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (lowerStr[i] !== lowerStr[len - i - 1]) {
      result = 'NO';
      break;
    }
  }

  return result;
}

// Solution 2
// 1. 결과값을 담을 변수 result에 'YES'로 초기화
// 2. 매개변수로 전달받은 str 문자열을 toLowerCase() 메서드를 사용하여 모두 소문자로 변환
// 3. split() 메서드를 사용해 str을 문자 단위로 쪼개서 배열로 만들고
// 4. reverse() 메서드를 사용해 배열의 순서를 뒤집은 후
// 5. join() 메서드를 사용해 배열의 요소를 이어 하나의 문자열로 반환
// 6. str 과 뒤집은 문자열 reverseStr 이 같지 않다면 result 배열에 'NO' 할당

function solution2(str) {
  let result = 'YES';

  str = str.toLowerCase();

  const reversedStr = str.split('').reverse().join('');

  if (str !== reversedStr) {
    result = 'NO';
  }

  return result;
}

// Solution 3
// 1. split() 메서드를 사용해 str을 문자 단위로 쪼개서 배열로 만들고
// 2. reverse() 메서드를 사용해 배열의 순서를 뒤집은 후
// 3. join() 메서드를 사용해 배열의 요소를 이어 하나의 문자열로 반환
// 4. str 과 뒤집은 문자열 reverseStr 을 모두 toLowerCase() 메서드를 사용해 소문자로 변경한 후 비교
// 5. 만약 두 문자열이 동일하다면 result 변수에 'YES' 를 할당하고 동일하지 않다면'NO' 를 할당
function solution3(str) {
  const reversedStr = str.split('').reverse().join('');
  const result = str.toLowerCase() === reversedStr.toLowerCase() ? 'YES' : 'NO';

  return result;
}

let str = 'gooG';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));

str = 'happy';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
