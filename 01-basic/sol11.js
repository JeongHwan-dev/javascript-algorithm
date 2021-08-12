function solution1(s) {
  let answer = 0;

  for (let c of s) {
    if (c === c.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

function solution2(s) {
  let answer = 0;

  for (let c of s) {
    let num = c.charCodeAt();

    if (num >= 65 && num <= 90) {
      answer++;
    }
  }

  return answer;
}

let str = "KoreaTimeGood";

console.log(solution1(str));
console.log(solution2(str));
