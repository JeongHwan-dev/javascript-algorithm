function solution(str) {
  let answer = 'YES';
  let stack = [];

  for (let c of str) {
    if (c === '(') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        answer = 'NO';
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    answer = 'NO';
  }

  return answer;
}

let str = '(()(()))(()';

console.log(solution(str));
