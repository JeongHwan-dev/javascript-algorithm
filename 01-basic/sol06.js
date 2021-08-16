function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let n of arr) {
    if (n % 2 !== 0) {
      sum += n;
      if (n < min) min = n;
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
