function solution(str) {
  let answer;
  let stack = [];

  for (let e of str) {
    if (isNaN(e)) {
      let rt = stack.pop();
      let lt = stack.pop();

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

  answer = Number(stack.join(''));

  return answer;
}

let str = '352+*9-';

console.log(solution(str));
