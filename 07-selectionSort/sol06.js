// Solution 1
// for 문을 이용한 솔루션
function solution1(arr) {
  const result = [];
  const sortedArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      result.push(i + 1);
    }

    if (result.length === 2) {
      break;
    }
  }

  return result;
}

// Solution 2
// map() 과 filter() 메서드를 이용한 솔루션
function solution2(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const result = arr
    .map((value, index) => (value !== sortedArr[index] ? index + 1 : ''))
    .filter((value) => value !== '');

  return result;
}

// Solution 3
// forEach() 메서드를 이용한 솔루션
function solution3(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const result = [];

  arr.forEach((value, index) => {
    if (value !== sortedArr[index]) {
      result.push(index + 1);
    }
  });

  return result;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];

console.log(solution1(arr1));
console.log(solution1(arr2));

console.log(solution2(arr1));
console.log(solution2(arr2));

console.log(solution3(arr1));
console.log(solution3(arr2));
