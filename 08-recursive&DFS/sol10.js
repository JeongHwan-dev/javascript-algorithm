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

// Solution 2
function getPermutations(array, selectNumber) {
  const result = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...attached);
  });

  return result;
}

function solution2(n, m, arr) {
  const permutations = getPermutations(arr, m);
  const result = [...permutations, permutations.length];

  return result;
}

let n = 3;
let m = 2;
let arr = [3, 6, 9];

console.log(solution1(n, m, arr));
console.log(solution2(n, m, arr));
