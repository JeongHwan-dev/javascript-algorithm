function solution1(str) {
  let answer = '';
  let stack = [];

  for (let e of str) {
    if (e === ')') {
      while (stack[stack.length - 1] !== '(') {
        stack.pop();
      }

      stack.pop();
    } else {
      stack.push(e);
    }
  }

  answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(solution1(str));
