function solution1(s, t) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      arr.push(i);
    }
  }

  for (let j = 0; j < s.length; j++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let idx of arr) {
      if (min > Math.abs(j - idx)) {
        min = Math.abs(j - idx);
      }
    }

    answer[j] = min;
  }

  return answer;
}

function solution2(s, t) {
  let answer = [];
  let gap = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      gap = 0;
    } else {
      gap++;
    }

    answer[i] = gap;
  }

  gap = 1000;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      gap = 0;
      answer[j] = gap;
    } else {
      gap++;
      if (answer[j] > gap) {
        answer[j] = gap;
      }
    }
  }

  return answer;
}

function solution3(s, t) {
  let answer = [];
  let p = 1000;

  for (let c of s) {
    if (c === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let s = 'teachermode';
let t = 'e';

console.log(solution1(s, t));
console.log(solution2(s, t));
console.log(solution3(s, t));
