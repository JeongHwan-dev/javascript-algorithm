// Solution 1
// sort() 메서드를 활용한 솔루션
function solution1(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr;
}

// Solution 2
// 선택 정렬을 이용한 솔루션
function solution2(arr) {
  const _arr = arr.slice();

  for (let i = 0; i < _arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[j] < _arr[minIdx]) {
        minIdx = j;
      }
    }

    [_arr[i], _arr[minIdx]] = [_arr[minIdx], _arr[i]];
  }

  return _arr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution1(arr));
console.log(solution2(arr));
