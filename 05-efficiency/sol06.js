function solution(str) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let sH = new Map();

  for (let c of str) {
    if (sH.has(c)) {
      sH.set(c, sH.get(c) + 1);
    } else {
      sH.set(c, 1);
    }
  }

  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';

console.log(solution(str));
