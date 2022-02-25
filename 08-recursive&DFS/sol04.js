// Solution 1
function solution1(n) {
  const subsetArray = [];
  const check = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    if (v === n + 1) {
      let temp = '';

      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) {
          temp += i + ' ';
        }
      }

      if (temp.length > 0) {
        subsetArray.push(temp.trim());
      }
    } else {
      check[v] = 1;
      dfs(v + 1);
      check[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);

  return subsetArray;
}

// Solution 2
function solution2(n) {
  const subsetArray = [];
  const check = Array.from({ length: n + 1 }, () => 0);

  function dfs(l) {
    if (l === n + 1) {
      const subset = [];

      check.forEach((value, index) => {
        if (value === 1) {
          subset.push(index);
        }
      });

      if (subset.length > 0) {
        subsetArray.push(subset);
      }
    } else {
      check[l] = 1;
      dfs(l + 1);
      check[l] = 0;
      dfs(l + 1);
    }
  }

  dfs(1);

  return subsetArray;
}

let n = 3;

console.log(solution1(n));
console.log(solution2(n));
