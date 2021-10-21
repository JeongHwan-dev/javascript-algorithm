// Solution 1
// 1. for문을 통해 홀수인 숫자만 sum에 더해준다.
// 2. sum에 더해준 후 그 숫자가 현재 최소값보다 작은지 판단하고 더 작다면 최소값을 교체한다.
function solution1(arr) {
  const result = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let n of arr) {
    if (n % 2 !== 0) {
      sum += n;

      if (n < min) {
        min = n;
      }
    }
  }

  result.push(sum);
  result.push(min);

  return answer;
}

// Solution 2
// 1. filter() 메서드를 사용해 홀수만 들어있는 새 배열을 만든다.
// 2. reduce() 메서드를 사용해 홀수만 들어 있는 새 배열의 합을 구한다.
// 3. Math.min() 메서드를 사용해 oddNumbers 배열 안에 있는 최소값을 반환한다.
function solution2(arr) {
  const oddNumbers = arr.filter((number) => number % 2 !== 0);
  const sum = oddNumbers.reduce((acc, number) => acc + number, 0);
  const min = Math.min(...oddNumbers);

  return [sum, min];
}

let arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution1(arr));
console.log(solution2(arr));
