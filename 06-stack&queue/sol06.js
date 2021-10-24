// Solution1
// Queue 를 활용한 솔루션
function solution1(n, k) {
  const table = Array.from({ length: n }, (_, index) => index + 1);
  let lastPrince = '';

  while (table.length) {
    for (let i = 1; i < k; i++) {
      table.push(table.shift());
    }

    table.shift();

    if (table.length === 1) {
      lastPrince = table.shift();
    }
  }

  return lastPrince;
}

// Solution 2
// Queue 를 활용한 솔루션
function solution2(n, k) {
  const table = Array.from({ length: n }, (_, index) => index + 1);

  while (table.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      table.push(table.shift());
    }

    table.shift();
  }

  const lastPrince = table[0];

  return lastPrince;
}

// Solution 3
// Queue 를 직접 구현해서 이용한 솔루션
class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    return this._arr.shift();
  }

  size() {
    return this._arr.length;
  }
}

function solution3(n, k) {
  const queue = new Queue();
  let lastPrince = '';

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size()) {
    for (let i = 0; i < k - 1; i++) {
      queue.enqueue(queue.dequeue());
    }

    queue.dequeue();

    if (queue.size() === 1) {
      lastPrince = queue.dequeue();
    }
  }

  return lastPrince;
}

let n = 8;
let k = 3;

console.log(solution1(n, k));
console.log(solution2(n, k));
console.log(solution3(n, k));
