// Solution 1
// sort() 메서드를 활용한 솔루션
function solution1(arr) {
  let answer = arr.sort((a, b) => a - b);

  return answer;
}

// Solution 2
// 선택 정렬을 이용한 솔루션
function solution2(arr) {
  const sortedArr = arr.slice();

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIdx]) {
        minIdx = j;
      }
    }

    [sortedArr[i], sortedArr[minIdx]] = [sortedArr[minIdx], sortedArr[i]];
  }

  return sortedArr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution1(arr));
console.log(solution2(arr));
