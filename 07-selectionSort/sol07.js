// Solution 1
// sort() 메서드를 이용한 솔루션
function solution(arr) {
  const _arr = arr.map((coordinate) => coordinate.slice());
  const sortedArr = _arr.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );

  return sortedArr;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
