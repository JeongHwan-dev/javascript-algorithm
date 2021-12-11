// Solution 1
function solution1(n, m, arr) {
  const permutationArray = [];
  const check = Array.from({ length: n }, () => 0);
  const temp = Array.from({ length: m }, () => 0);

  function DFS(l) {
    if (l === m) {
      permutationArray.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[l] = arr[i];
          DFS(l + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);

  const result = [...permutationArray, permutationArray.length];

  return result;
}

let n = 3;
let m = 2;
let arr = [3, 6, 9];

console.log(solution1(n, m, arr));
