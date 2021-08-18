function solution1(str) {
  let answer = "";
  let arr = [];
  let res = [];

  arr = str.split("");

  for (let e of arr) {
    if (res.indexOf(e) == -1) {
      answer += e;
      res.push(e);
    }
  }

  return answer;
}

function solution2(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }

  return answer;
}

// 특정 문자 개수 카운트
function solution3(str) {
  let answer = 0;
  let pos = str.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = str.indexOf("k", pos + 1);
  }

  return answer;
}

console.log(solution1("ksekkset"));
console.log(solution2("ksekkset"));
console.log(solution3("ksekkset"));
