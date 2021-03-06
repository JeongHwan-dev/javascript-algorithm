// Solution 1
// stack 을 활용한 솔루션
function solution(str) {
  const stack = [];

  for (const c of str) {
    if (c === ')') {
      while (true) {
        if (stack.pop() === '(') {
          break;
        }
      }
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(solution(str));
