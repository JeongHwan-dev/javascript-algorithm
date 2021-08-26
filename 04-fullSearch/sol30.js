function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution1(n, arr) {
  let answer = [];

  for (let num of arr) {
    let res = 0;

    while (num) {
      let tmp = num % 10;

      res = res * 10 + tmp;
      num = parseInt(num / 10);
    }

    if (isPrime(res)) {
      answer.push(res);
    }
  }

  return answer;
}

function solution2(n, arr) {
  let answer = [];

  for (let num of arr) {
    let res = Number(num.toString().split('').reverse().join(''));

    if (isPrime(res)) {
      answer.push(res);
    }
  }

  return answer;
}

let n = 9;
let arr = [32, 55, 62, 20, 260, 370, 200, 30, 100];

console.log(solution1(n, arr));
console.log(solution2(n, arr));
