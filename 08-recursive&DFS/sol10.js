// Solution 1
function solution1(n, m, arr) {
  const permutations = [];
  const permutation = Array.from({ length: m }, () => 0);
  const visited = Array.from({ length: n }, () => false);

  function dfs(l) {
    if (l === m) {
      permutations.push(permutation.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permutation[l] = arr[i];
          dfs(l + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(0);

  const result = [...permutations, permutations.length];

  return result;
}

// Solution 2
function getPermutations(array, selectNumber) {
  const len = array.length;
  const permutations = [];
  const permutation = Array.from({ length: selectNumber }, () => 0);
  const visited = Array.from({ length: len }, () => false);

  function dfs(l) {
    if (l === selectNumber) {
      permutations.push(permutation.slice());
    } else {
      for (let i = 0; i < len; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permutation[l] = array[i];
          dfs(l + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(0);

  return permutations;
}

function solution2(n, m, arr) {
  const permutations = getPermutations(arr, m);
  const result = [...permutations, permutations.length];

  return result;
}

// Solution 3
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

function solution3(n, m, arr) {
  const permutations = getPermutations(arr, m);
  const result = [...permutations, permutations.length];

  return result;
}

let n = 3;
let m = 2;
let arr = [3, 6, 9];

console.log(solution1(n, m, arr));
console.log(solution2(n, m, arr));
console.log(solution3(n, m, arr));
