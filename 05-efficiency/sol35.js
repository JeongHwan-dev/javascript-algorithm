function solution1(arr1, arr2) {
  let answer = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let n1 of arr1) {
    for (let n2 of arr2) {
      if (n1 === n2) {
        answer.push(n1);
      }
    }
  }

  return answer;
}

function solution2(arr1, arr2) {
  let answer = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let p1 = (p2 = 0);

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < n1 && p2 < n2) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution1(arr1, arr2));
console.log(solution2(arr1, arr2));
