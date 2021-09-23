// Solution 1
// 1. 대문자 개수를 담는 변수를 0으로 초기화
// 2. for 문을 사용해 문자열을 문자 단위로 탐색
// 3. if 문을 사용하여 현재 문자가 대문자로 변환 했을 때와 동일한지 확인
// 4. 동일하다면 대문자 개수 +1
function solution1(str) {
  let upperCaseCount = 0;

  for (const c of str) {
    if (c === c.toUpperCase()) {
      upperCaseCount++;
    }
  }

  return upperCaseCount;
}

// Solution 2
// 1. 대문자 개수를 담는 변수를 0으로 초기화
// 2. for 문을 사용해 문자열을 문자 단위로 탐색
// 3. 문자를 아스키코드화 시켜 대문자에 해당하는지 확인
// (영문 대문자 아스키코드 65 ~ 90 / 영문 소문자 아스키코드 97 ~ 122)

function solution2(str) {
  let upperCaseCount = 0;

  for (let c of str) {
    const charCode = c.charCodeAt();

    if (charCode >= 65 && charCode <= 90) {
      upperCaseCount++;
    }
  }

  return upperCaseCount;
}

// Solution 3
// 1. split() 메서드를 사용해서 문자열을 문자 단위로 쪼개어 새 배열 생성
// 2. toUpperCase() 메서드를 사용해 문자열의 문자 모두를 대문자로 변경하고
// 3. split() 메서드를 통해 문자 단위로 쪼개어 새 배열 생성
// 4. filter() 메서드를 사용해 strArray 배열 안의 문자들이 동일한 인덱스 위치의 upperCaseStrArray 배열의 요소와 같은 요소만으로 이루어진 새 배열 생성
// 5. filter() 메서드를 사용해 만든 새 배열의 길이는 즉 대문자의 개수
function solution3(str) {
  const strArray = str.split('');
  const upperCaseStrArray = str.toUpperCase().split('');
  const upperCaseCount = strArray.filter(
    (c, index) => c === upperCaseStrArray[index]
  ).length;

  return upperCaseCount;
}

// Solution 4
// 1. split() 메서드를 사용해서 문자열을 문자 단위로 쪼개어 새 배열 생성
// 2. filter() 메서드를 사용하여 배열 안의 문자가 대문자로 변경했을 때와 동일한지 확인하여 동일한 문자들만으로 이루어진 새 배열 생성
// 3. filter() 메서드를 사용해 만든 새 배열의 길이는 즉 대문자의 개수
function solution4(str) {
  const strArray = str.split('');
  const upperCaseCount = strArray.filter((c) => c === c.toUpperCase()).length;

  return upperCaseCount;
}

let str = 'KoreaTimeGood';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
console.log(solution4(str));
