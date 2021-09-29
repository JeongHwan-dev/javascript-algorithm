// Solution 1
// 1. cCount 변수를 0으로 초기화
// 2. for문을 사용해 str 문자열의 문자 요소들을 탐색하고
// 3. if문을 사용해 문자 요소 중 c와 동일한 문자가 있다면
// 4. cCount 값을 +1씩 올린다.

function solution1(str, c) {
  let cCount = 0;

  for (const e of str) {
    if (e === c) {
      cCount++;
    }
  }

  return cCount;
}

// Solution 2
// 1. str 문자열을 split() 메서드를 사용해 문자 단위의 새 배열로 만든 후
// 2. filter() 메서드로 새 배열을 탐색하여 c와 같은 요소만 필터링 한다.
// 3. 즉 이 필터링되어 만들어진 새 배열의 길이는 c의 개수가 된다.

function solution2(str, c) {
  const strArray = str.split('');
  const cCount = strArray.filter((e) => e === c).length;

  return cCount;
}

// Solution 3
// 1. str 문자열을 split() 메서드를 사용해 c 문자 단위로 쪼갠 후 새 배열을 만들고
// 2. 만들어진 새 배열에서 1을 뺀 값이 c의 개수가 된다.

function solution3(str, c) {
  const cCount = str.split(c).length - 1;

  return cCount;
}

let str = 'COMPUTERPROGRAMMING';
let c = 'R';

console.log(solution1(str, c));
console.log(solution2(str, c));
console.log(solution3(str, c));
