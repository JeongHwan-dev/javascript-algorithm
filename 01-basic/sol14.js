function solution(str) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let e of str) {
    if (max < e.length) {
      max = e.length;
      answer = e;
    }
  }

  return answer;
}

let str = ["teacher", "time", "student", "beatiful", "good"];

console.log(solution(str));
