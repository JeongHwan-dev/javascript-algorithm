// Solution 1
// 삽입 정렬을 활용한 솔루션
function solution(arr) {
  const _arr = arr.slice();

  for (let i = 1; i < _arr.length; i++) {
    const cur = _arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (_arr[j] > cur) {
        _arr[j + 1] = _arr[j];
      } else {
        break;
      }
    }

    _arr[j + 1] = cur;
  }

  return _arr;
}

let arr = [11, 7, 5, 6, 10, 9];

console.log(solution(arr));
