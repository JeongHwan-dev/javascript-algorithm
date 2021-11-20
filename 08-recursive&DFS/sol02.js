// 재귀함수를 이용한 솔루션
function solution1(n) {
  let binaryNumber = '';

  function dfs(n) {
    if (n === 0) {
      return;
    } else {
      dfs(parseInt(n / 2));
      binaryNumber += String(n % 2);
    }
  }

  dfs(n);

  return binaryNumber;
}

console.log(solution(11));
