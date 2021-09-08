// 큐 (Queue)
// - 데이터를 집어넣을 수 있는 선형(linear) 자료형
// - 먼저 집어넣은 데이터가 먼저 나오는 특징을 갖고 있습니다. (FIFO)
// - 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있습니다.
// - 큐는 순서대로 처리해야 하는 작업을 입시로 저장해두는 버퍼(buffer)로서 많이 사용됩니다.

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

const queue = new Queue();

queue.enqueue(1);
console.log(queue);

queue.enqueue(2);
console.log(queue);

queue.enqueue(3);
console.log(queue);

console.log(queue.dequeue());

console.log(queue.size());
