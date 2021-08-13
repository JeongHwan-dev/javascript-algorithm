function solution1(s) {
  let answer = s.toUpperCase();

  return answer;
}

function solution2(s) {
  let answer = "";

  for (let c of s) {
    if (c === c.toLowerCase()) {
      answer += c.toUpperCase();
    } else {
      answer += c;
    }
  }

  return answer;
}

function solution3(s) {
  let answer = "";

  for (let c of s) {
    let num = c.charCodeAt();

    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += c;
    }
  }

  return answer;
}

let str = "ItisTimeToStudy";

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
