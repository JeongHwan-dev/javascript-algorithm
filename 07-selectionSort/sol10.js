// Solution 1
// 이분 검색을 이용한 솔루션
function solution(target, arr) {
  const _arr = arr.slice();
  let order;
  let leftPoint = 0;
  let rightPoint = arr.length - 1;

  _arr.sort((a, b) => a - b);

  while (leftPoint <= rightPoint) {
    const mid = parseInt((leftPoint + rightPoint) / 2);

    if (_arr[mid] === target) {
      order = mid + 1;
      break;
    } else if (_arr[mid] > target) {
      rightPoint = mid - 1;
    } else {
      leftPoint = mid + 1;
    }
  }

  return order;
}

let target = 32;
let arr = [23, 81, 65, 12, 57, 32, 99, 81];

console.log(solution(target, arr));
