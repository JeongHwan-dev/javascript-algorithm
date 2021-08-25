function solution1(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let e of arr) {
    let sum = 0;
    let tmp = e;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (max < sum) {
      max = sum;
      answer = e;
    } else if (max == sum) {
      if (answer < e) {
        answer = e;
      }
    }
  }

  return answer;
}

function solution2(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((acc, curr) => acc + Number(curr), 0);

    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (answer < x) {
        answer = x;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution1(7, arr));
console.log(solution2(7, arr));
