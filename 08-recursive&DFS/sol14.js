// Solution 1
function solution1(n, m) {
  const combinations = [];
  const combination = Array.from({ length: m }, () => 0);

  function dfs(l, startIndex) {
    if (l === m) {
      combinations.push(combination.slice());
    } else {
      for (let i = startIndex; i <= n; i++) {
        combination[l] = i;
        dfs(l + 1, i + 1);
      }
    }
  }

  dfs(0, 1);

  return combinations;
}

// Solution 2
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

function solution2(n, m) {
  const numberArray = Array.from({ length: n }, (_, index) => index + 1);
  const combinations = getCombinations(numberArray, m);

  return combinations;
}

let n = 4;
let m = 2;

console.log(solution1(n, m));
console.log(solution2(n, m));
