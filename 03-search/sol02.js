// Solution 1
// 1. str 문자열을 toLowerCase() 메서드를 사용해 모두 소문자로 변경
// 2. replace() 메서드와 정규표현식을 사용해 str 에서 소문자 알파벳이 아닌 문자들을 모두 빈 문자열로 변경
// 3. reverse() 메서드를 사용하여 문자열 앞 뒤가 순서가 바뀐 reversedStr 생성
// 4. 결과 변수 palindrome에 filteredStr 과 reversedStr 을 비교하여 같으면 'YES' 같지 않으면 'NO' 를 할당
function solution1(str) {
  const filteredStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const reversedStr = filteredStr.split('').reverse().join('');
  const palindrome = filteredStr === reversedStr ? 'YES' : 'NO';

  return palindrome;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution1(str));
