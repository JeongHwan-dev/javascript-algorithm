// Solution 1
// 1. replace() 메서드와 정규표현식을 사용해 0 ~ 9 가 아닌 숫자들은 모두 빈 문자열로 변경
// 2. 숫자만 필터링된 filteredStr 변수를 parseInt() 메서드를 통해 정수로 변경하여 반환

function solution1(str) {
  const filteredStr = str.replace(/[^0-9]/g, '');
  const number = parseInt(filteredStr);

  return number;
}

// Solution 2
// 1. 숫자를 담을 number 변수를 빈 문자열로 초기화하여 생성
// 2. for 문을 사용해 str 문자열을 문자 단위로 숫자인지 아닌지 isNaN() 메서드를 사용해 판단
// 3. 숫자라면 number 변수에 추가
// 4. parseInt() 메서드를 사용해 현재 문자열 형태인 number 변수의 값을 정수로 변경하여 반환

function solution2(str) {
  let number = '';

  for (let c of str) {
    if (!isNaN(c)) {
      number += c;
    }
  }

  return parseInt(number);
}

// Solution 3
// 1. 숫자를 담을 number 변수를 0으로 초기화하여 생성
// 2. for 문을 사용해 str 문자열을 문자 단위로 숫자인지 아닌지 isNaN() 메서드를 사용해 판단
// 3. 숫자라면 이전 number 값에 곱하기 10을 해주고 현재 문자열 타입의 숫자를 Number() 메서드를 통해 숫자로 변환하여 더하기 연산 진행
// 4. 최종적으로 연산된 number 값을 반환

function solution3(str) {
  let number = 0;

  for (let c of str) {
    if (!isNaN(c)) {
      number = number * 10 + Number(c);
    }
  }

  return number;
}

// Solution 4
// 1. str 문자열을 split() 메서드를 사용해 문자 단위로 쪼개어 새 배열 생성 후 반환
// 2. 반환된 배열을 filter() 메서드를 통해 숫자 요소만을 골라내어 새 배열 생성 후 반환
// 3. join() 메서드를 사용해 반환된 배열을 연결하여 하나의 문자열로 만들기
// 4. Number() 메서드를 사용해 문자열 타입을 숫자 타입으로 변경시켜 반환

function solution4(str) {
  const number = Number(
    str
      .split('')
      .filter((e) => !isNaN(e))
      .join('')
  );

  return number;
}

let str = 'g0en2T0s8eSoft';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
console.log(solution4(str));
