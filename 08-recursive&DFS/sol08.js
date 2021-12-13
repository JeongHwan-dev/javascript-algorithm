// Solution 1
function solution1(n, m) {
  const permutationOfRepetition = [];
  const temp = Array.from({ length: m }, () => 0);

  function DFS(l) {
    if (l === m) {
      permutationOfRepetition.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp[l] = i;
        DFS(l + 1);
      }
    }
  }

  DFS(0);

  return permutationOfRepetition;
}

let n = 3;
let m = 2;

console.log(solution1(n, m));
