// Solution 1
// Stack 을 활용한 솔루션
function solution(str) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      stack.pop();

      if (str[i - 1] === '(') {
        count += stack.length;
      } else {
        count++;
      }
    }
  }

  return count;
}

let str = '()(((()())(())()))(())';

console.log(solution(str));
