function solution(arr1, arr2) {
  let answer = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n1 && p2 < n2) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  while (p1 < n1) {
    answer.push(arr1[p1++]);
  }

  while (p2 < n2) {
    answer.push(arr2[p2++]);
  }

  return answer;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));
