function solution1(a, b) {
  let answer = 'YES';
  let aArr = a.split('');
  let bArr = b.split('');
  let len = bArr.length;

  for (let i = 0; i < len; i++) {
    let sub = bArr.shift();

    if (aArr.indexOf(sub) !== -1) {
      if (aArr.indexOf(sub) === 0) {
        aArr.shift();
      } else {
        answer = 'NO';
        break;
      }
    }
  }

  if (aArr.length !== 0) {
    answer = 'NO';
  }

  return answer;
}

function solution2(need, plan) {
  let answer = 'YES';
  let queue = need.split('');

  for (let sub of plan) {
    if (queue.includes(sub)) {
      if (sub !== queue.shift()) {
        answer = 'NO';
        break;
      }
    }
  }

  if (queue.length > 0) {
    answer = 'No';
  }

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';

console.log(solution1(a, b));

a = 'CBA';
b = 'CADBGE';

console.log(solution1(a, b));

a = 'CBA';
b = 'CBDAGE';

console.log(solution2(a, b));

a = 'CBA';
b = 'CADBGE';

console.log(solution2(a, b));
