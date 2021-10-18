function solution1(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }

    queue.shift();

    if (queue.length === 1) {
      answer = queue.shift();
    }
  }

  return answer;
}

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

function solution2(n, k) {
  let answer;
  const queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size()) {
    for (let i = 1; i < k; i++) {
      queue.enqueue(queue.dequeue());
    }

    queue.dequeue();

    if (queue.size() === 1) {
      answer = queue.dequeue();
    }
  }

  return answer;
}

let n = 8;
let k = 3;

console.log(solution1(n, k));
console.log(solution2(n, k));
