function solution(arr) {
  let answer = 0;
  let score = 0;

  for (let e of arr) {
    if (e === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));
