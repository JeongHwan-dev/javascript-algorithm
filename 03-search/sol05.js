// Solution 1
// 1. 압축된 문자열을 할당할 변수 compressedStr 를 빈 문자열로 초기화
// 2. 연속되는 단어 수를 카운트할 변수 count를 1로 초기화
// 3. str 문자열 끝에 공백 문자 하나 추가
// 4. for 문을 통해 배열 요소가 해당 배열 요소 앞에 있는 값과 동일할 때 카운트를 +1
// 5. 만약 동일하지 않다면 그때 compressedStr 에 현재 배열 요소 문자 값을 더하고
// 6. 카운트 값이 1 보다 크다면 count 값도 문자열 타입으로 변환 후 compressedStr 에 더하기
// 7. 다시 count 값을 1로 초기화
function solution1(str) {
  let compressedStr = '';
  let count = 1;
  str = str + ' ';

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedStr += str[i];

      if (count > 1) {
        compressedStr += String(count);
      }

      count = 1;
    }
  }

  return compressedStr;
}

// Solution 2
// 1. 압축된 문자열을 할당할 변수 compressedStr 에 str 문자열 첫 번째 값으로 초기화
// 2. 연속되는 단어 수를 카운트할 변수 count를 1로 초기화
// 3. str 문자열 끝에 공백 문자 하나 추가
// 4. for 문을 통해 배열 요소가 compressedStr의 마지막 문자와 동일하다면 카운트 +1
// 5. 만약 동일하지 않고 카운트 값이 1 보다 크다면 compressedStr 에 카운트값 문자열 타입으로 변환 후 더하기
// 6. 이후 현재 새로운 문자 요소도 compressedStr에 더하기
// 7. 다시 count 값을 1로 초기화
function solution2(str) {
  let compressedStr = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === compressedStr[compressedStr.length - 1]) {
      count++;
    } else {
      if (count > 1) {
        compressedStr += String(count);
      }

      compressedStr += str[i];
      count = 1;
    }
  }

  return compressedStr;
}

let str = 'KKHSSSSSSSE';

console.log(solution1(str));
console.log(solution2(str));
