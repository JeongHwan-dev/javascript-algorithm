function solution1(n) {
  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }

  const nFactorial = DFS(n);

  return nFactorial;
}

let n = 5;

console.log(solution1(n));
