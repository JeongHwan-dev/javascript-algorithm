// Solution 1
// 버블 정렬을 이용한 솔루션
function solution1(arr) {
  const _arr = arr.slice();
  const len = _arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (_arr[j] > 0 && _arr[j + 1] < 0) {
        [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
      }
    }
  }

  return _arr;
}

//  Solution 2
//  for 문과 전개 연산자를 이용한 솔루션
function solution2(arr) {
  const negativeArr = [];
  const positiveArr = [];

  for (const num of arr) {
    num > 0 ? positiveArr.push(num) : negativeArr.push(num);
  }

  const sortedArr = [...negativeArr, ...positiveArr];

  return sortedArr;
}

//  Solution 3
//  for 문과 concat() 메서드를 이용한 솔루션
function solution3(arr) {
  const negativeNums = [];
  const positiveNums = [];

  for (const num of arr) {
    num > 0 ? positiveNums.push(num) : negativeNums.push(num);
  }

  const sortedArr = negativeNums.concat(positiveNums);

  return sortedArr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution1(arr));
console.log(solution2(arr));
console.log(solution3(arr));
