// Solution 1
// 1. 변환된 str을 담을 convertedStr 변수를 빈 문자열로 초기화
// 2. for 문을 사용해 문자열을 문자 단위로 탐색
// 3. 탐색하는 문자가 소문자로 변환했을 때와 동일하다면 그 문자는 소문자일 것이다. 그러므로 대문자로 변환 후
// 4. 변환된 문자를 convertedStr 변수에 더하기
// 5. 이 조건이 아닌 문자는 대문자이므로 소문자로 변환 후
// 5. 변환된 문자를 convertedStr 변수에 더하기
function solution1(str) {
  let convertedStr = '';

  for (let c of str) {
    if (c === c.toLowerCase()) {
      convertedStr += c.toUpperCase();
    } else {
      convertedStr += c.toLowerCase();
    }
  }

  return convertedStr;
}

// Solution 2
// 1. 변환된 str을 담을 convertedStr 변수를 빈 문자열로 초기화
// 2. for 문을 사용해 문자열을 문자 단위로 탐색
// 3. charCodeAt() 메서드를 사용해 문자의 유니코드 반환
// 4. 아스키코드를 통해 문자 대소문자 판단
// (영문 대문자 아스키코드 65 ~ 90 / 영문 소문자 아스키코드 97 ~ 122)
// 5. 소문자이면 대문자로 변경 후 convertedStr 변수에 더하고
// 6. 대문자이면 소문자로 변경 후 convertedStr 변수에 더하기
function solution2(str) {
  let convertedStr = '';

  for (c of str) {
    const charCode = c.charCodeAt();

    if (charCode >= 97 && charCode <= 122) {
      convertedStr += c.toUpperCase();
    } else {
      convertedStr += c.toLowerCase();
    }
  }

  return convertedStr;
}

// Solution 3
// 1. split() 메서드를 사용하여 문자 단위로 쪼개어 새 배열을 생성
// 2. 생성된 배열의 요소 마다 확인하여 소문자이면 대문자로 변환, 대문자이면 소문자로 변환해서 새 배열 생성
// 3. join() 메서드를 사용해 변환된 문자열 생성
function solution3(str) {
  const convertedStr = str
    .split('')
    .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('');

  return convertedStr;
}

let str = 'StuDY';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
