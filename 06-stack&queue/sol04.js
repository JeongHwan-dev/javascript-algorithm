// Solution 1
// for 문과 switch 문을 활용한 솔루션
function solution1(str) {
  const stack = [];

  for (const e of str) {
    if (isNaN(e)) {
      const rt = stack.pop();
      const lt = stack.pop();

      switch (e) {
        case '+':
          stack.push(lt + rt);
          break;
        case '-':
          stack.push(lt - rt);
          break;
        case '*':
          stack.push(lt * rt);
          break;
        case '/':
          stack.push(lt / rt);
          break;
      }
    } else {
      stack.push(Number(e));
    }
  }

  const result = Number(stack.join(''));

  return result;
}

// Solution 2
// 연산 결과를 반환하는 getOperationResult() 함수 만들어 활용한 솔루션
function getOperationResult(operator, num1, num2) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  return result;
}

function solution2(str) {
  const stack = [];

  for (const e of str) {
    if (isNaN(e)) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      const resultNum = getOperationResult(e, num1, num2);

      stack.push(resultNum);
    } else {
      stack.push(Number(e));
    }
  }

  const result = stack.pop();

  return result;
}

let str = '352+*9-';

console.log(solution1(str));
console.log(solution2(str));
