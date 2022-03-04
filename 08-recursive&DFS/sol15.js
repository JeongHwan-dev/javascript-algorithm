// Solution 1
function solution1(n, k, arr, m) {
  let count = 0;

  function dfs(l, start, sum) {
    if (l === k) {
      if (sum % m === 0) {
        count += 1;
      }
    } else {
      for (let i = start; i < n; i++) {
        dfs(l + 1, i + 1, sum + arr[i]);
      }
    }
  }

  dfs(0, 0, 0);

  return count;
}

// Solution 2
function getCombinations(array, selectNumber) {
  const combinations = [];
  const combination = Array.from({ length: selectNumber }, () => 0);

  function dfs(l, start) {
    if (l === selectNumber) {
      combinations.push(combination.slice());
    } else {
      for (let i = start; i < array.length; i++) {
        combination[l] = array[i];
        dfs(l + 1, i + 1);
      }
    }
  }

  dfs(0, 0);

  return combinations;
}

function solution2(n, k, arr, m) {
  const combinations = getCombinations(arr, k);
  const count = combinations
    .map((combination) => combination.reduce((acc, cur) => acc + cur, 0))
    .filter((sum) => sum % m === 0).length;

  return count;
}

// Solution 3
function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution3(n, k, arr, m) {
  const combinations = getCombinations(arr, k);
  const count = combinations.filter((combination) => {
    const sum = combination.reduce((acc, cur) => acc + cur, 0);

    return sum % m === 0 ? true : false;
  }).length;

  return count;
}

let n = 5;
let k = 3;
let arr = [2, 4, 5, 8, 12];
let m = 6;

console.log(solution1(n, k, arr, m));
console.log(solution2(n, k, arr, m));
console.log(solution3(n, k, arr, m));
