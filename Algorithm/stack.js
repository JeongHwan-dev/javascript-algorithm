// 스택 Stack
// - 데이터를 집어넣을 수 있는 선형(linear) 자료형
// - 나중에 집어넣은 데이터가 먼저 나옵니다. (LILO)
// - 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 집어넣은 데이터를 확인하는 peek 등의 작업을 할 수 있습니다<div className=""></div>
// - 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용됩니다.

class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  pop() {
    return this._arr.pop();
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  size() {
    return this._arr.length;
  }
}

const stack = new Stack();

stack.push(1);
console.log(stack);

stack.push(2);
console.log(stack);

stack.push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.size());
