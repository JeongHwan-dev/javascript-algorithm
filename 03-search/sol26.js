function solution1(str) {
  let answer;
  str = str.replace(/[^0-9]/g, '');

  answer = parseInt(str);

  return answer;
}

function solution2(str) {
  let answer = '';

  for (let c of str) {
    if (!isNaN(c)) {
      answer += c;
    }
  }

  return parseInt(answer);
}

function solution3(str) {
  let answer = 0;

  for (let c of str) {
    if (!isNaN(c)) {
      answer = answer * 10 + Number(c);
    }
  }

  return answer;
}

let str = 'g0en2T0s8eSoft';

console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
