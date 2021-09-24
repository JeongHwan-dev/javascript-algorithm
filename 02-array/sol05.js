function solution1(arr) {
  let answer = [];
  let copyArr = arr.slice();
  let sortedArr = copyArr.sort((a, b) => b - a);

  for (let e of arr) {
    answer.push(sortedArr.indexOf(e) + 1);
  }

  return answer;
}

function solution2(arr) {
  let answer = [];

  for (let e of arr) {
    let rank = 1;

    for (let x of arr) {
      if (e < x) {
        rank++;
      }
    }

    answer.push(rank);
  }

  return answer;
}

function solution3(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }

  return answer;
}

let arr1 = [87, 89, 92, 100, 76];

console.log(solution1(arr1));
console.log(solution2(arr1));
console.log(solution3(arr1));

let arr2 = [92, 92, 92, 100, 76];

console.log(solution1(arr2));
console.log(solution2(arr2));
console.log(solution3(arr2));
