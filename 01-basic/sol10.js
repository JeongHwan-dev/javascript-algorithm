function solution1(str, c) {
  let answer = 0;

  for (let e of str) {
    if (e === c) {
      answer++;
    }
  }

  return answer;
}

function solution2(str, c) {
  let answer = str.split(c).length - 1;

  return answer;
}

let str = "COMPUTERPROGRAMMING";

console.log(solution(str, "R"));
console.log(solution2(str, "R"));
