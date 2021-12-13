// Solution 1
function solution1(n, m, ps, pt) {
  let maxScore = Number.MIN_SAFE_INTEGER;

  function DFS(i, score, time) {
    if (time > m) {
      return;
    }

    if (i === n) {
      maxScore = Math.max(maxScore, score);
    } else {
      DFS(i + 1, score + ps[i], time + pt[i]);
      DFS(i + 1, score, time);
    }
  }

  DFS(0, 0, 0);

  return maxScore;
}

let n = 5;
let m = 20;
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];

console.log(solution1(n, m, ps, pt));
