// Solution 1
function solution() {
  const queue = [];
  let result = '';

  queue.push(1);

  while (queue.length) {
    const value = queue.shift();

    result += value + ' ';

    for (const newValue of [value * 2, value * 2 + 1]) {
      if (newValue > 7) {
        continue;
      }

      queue.push(newValue);
    }
  }

  return result;
}

console.log(solution());
