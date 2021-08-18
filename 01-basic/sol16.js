function solution1(str) {
  let answer = [];

  for (let e of str) {
    if (answer.indexOf(e) === -1) {
      answer.push(e);
    }
  }

  return answer;
}

function solution2(str) {
  let answer;

  answer = str.filter(function (v, i) {
    if (str.indexOf(v) === i) {
      return true;
    }
  });

  return answer;
}

function solution3(str) {
  let answer;

  answer = str.filter((v, i) => str.indexOf(v) === i);

  return answer;
}

let str = ["good", "time", "good", "time", "student"];

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
