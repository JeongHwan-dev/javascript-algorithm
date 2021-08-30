function solution(n, k, card) {
  let answer;
  let tmp = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let a = j + 1; a < n; a++) {
        tmp.add(card[i] + card[j] + card[a]);
      }
    }
  }

  let arr = Array.from(tmp).sort((a, b) => b - a);

  answer = arr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
