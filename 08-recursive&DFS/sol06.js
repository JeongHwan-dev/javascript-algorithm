// Solution 1
function solution1(c, arr) {
  let maxWeight = Number.MIN_SAFE_INTEGER;
  const n = arr.length;

  function DFS(l, sum) {
    if (sum > c) {
      return;
    }

    if (l === n) {
      maxWeight = Math.max(maxWeight, sum);
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  }

  DFS(0, 0);

  return maxWeight;
}

let c = 259;
let arr = [81, 58, 42, 33, 61];

console.log(solution1(c, arr));
