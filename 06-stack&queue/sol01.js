function solution(str) {
  const stack = [];

  for (const bracket of str) {
    if (bracket === '(') {
      stack.push(bracket);
    } else if (bracket === ')') {
      if (stack.length === 0) {
        return 'NO';
      }

      stack.pop();
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

let str = '(()(()))(()';

console.log(solution(str));
