function solution(str) {
  let convertedStr = '';

  for (let c of str) {
    if (c === c.toLowerCase()) {
      convertedStr += c.toUpperCase();
    } else {
      convertedStr += c.toLowerCase();
    }
  }

  return convertedStr;
}

let str = 'StuDY';

console.log(solution(str));
