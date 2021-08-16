function solution1(str) {
  let answer = "";

  for (let c of str) {
    if (c === "A") {
      answer += "#";
    } else {
      answer += c;
    }
  }

  return answer;
}

function solution2(str) {
  let answer = str;
  answer = answer.replace(/A/g, "#");

  return answer;
}

let str = "BANANA";

console.log(solution1(str));
console.log(solution2(str));
