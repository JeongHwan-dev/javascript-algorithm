// Solution 1
// 결정 알고리즘을 이용한 솔루션
function count(stable, distance) {
  let count = 1;
  let ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= distance) {
      count++;
      ep = stable[i];
    }
  }

  return count;
}

function solution(c, stable) {
  let maxDistance;

  stable.sort((a, b) => a - b);

  let lp = 1;
  let rp = stable[stable.length - 1];

  while (lp <= rp) {
    const mid = parseInt((lp + rp) / 2);

    if (count(stable, mid) >= c) {
      maxDistance = mid;
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }

  return maxDistance;
}

let c = 3;
let stable = [1, 2, 8, 4, 9];

console.log(solution(c, stable));
