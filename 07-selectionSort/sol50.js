// Solution 1
// 버블 정렬을 이용한 솔루션(뒤부터 정렬)
function solution1(arr) {
  const _arr = arr.slice();

  for (let i = 0; i < _arr.length - 1; i++) {
    for (let j = 0; j < _arr.length - i - 1; j++) {
      if (_arr[j] > _arr[j + 1]) {
        [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
      }
    }
  }

  return _arr;
}

// Solution 2
// 버블 정렬을 이용한 솔루션(앞부터 정렬)
function solution2(arr) {
  const _arr = arr.slice();

  for (let i = 0; i < _arr.length - 1; i++) {
    for (let j = _arr.length - 1; j > i; j--) {
      if (_arr[j] < _arr[j - 1]) {
        [_arr[j], _arr[j - 1]] = [_arr[j - 1], _arr[j]];
      }
    }
  }

  return _arr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution1(arr));
console.log(solution2(arr));
