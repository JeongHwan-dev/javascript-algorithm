// Solution 1
function solution1(arr) {
  let result = 'NO';
  let flag = false;
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  const len = arr.length;

  function DFS(i, sum) {
    if (flag) {
      return;
    }

    if (i === len) {
      if (totalSum - sum === sum) {
        result = 'YES';
        flag = true;
      }
    } else {
      DFS(i + 1, sum + arr[i]);
      DFS(i + 1, sum);
    }
  }

  DFS(0, 0);

  return result;
}

let arr = [1, 3, 5, 6, 7, 10];

console.log(solution1(arr));
