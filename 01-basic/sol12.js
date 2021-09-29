// Solution 1
// 1. toUpperCase() 메서드를 사용해 문자열의 모든 문자들을 대문자로 변경

function solution1(str) {
  const upperCaseStr = str.toUpperCase();

  return upperCaseStr;
}

// Solution 2
// 1. 대문자 문자열을 담을 변수를 빈 문자열로 초기화
// 2. for 문을 사용해 문자열의 문자들을 하나씩 탐색
// 3. 문자가 toUpperCase() 메서드로 대문자로 변환된 문자와 동일하다면
// 4. 그 문자 그대로 대문자 upperCaseStr 변수에 추가
// 5. 만약 다르다면 toUpperCase() 메서드를 사용해 대문자로 변경 후 upperCaseStr 변수에 추가

function solution2(str) {
  let upperCaseStr = '';

  for (let c of str) {
    if (c === c.toUpperCase()) {
      upperCaseStr += c;
    } else {
      upperCaseStr += c.toUpperCase();
    }
  }

  return upperCaseStr;
}

// Solution 3
// 1. 대문자 문자열을 담을 변수를 빈 문자열로 초기화
// 2. for 문을 사용해 문자열의 문자들을 하나씩 탐색
// 3. charCodeAt() 메서드를 사용해 현재 문자의 유니코드 반환
// 4. 유니코드를 통해 대문자인지 소문자인지 판단하고
// 5. 소문자이면 대문자 유니코드로 변경 후 문자열 타입으로 변경하여 upperCaseStr 변수에 추가
// (String.fromCharCode() 메서드를 통해 유니코드로부터 문자열을 생성해 반환)
// 6. 대문자이면 그 문자 그대로 upperCaseStr 변수에 추가

function solution3(str) {
  let upperCaseStr = '';

  for (let c of str) {
    const charCode = c.charCodeAt();

    if (charCode >= 97 && charCode <= 122) {
      upperCaseStr += String.fromCharCode(charCode - 32);
    } else {
      upperCaseStr += c;
    }
  }

  return upperCaseStr;
}

let str = 'ItisTimeToStudy';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
