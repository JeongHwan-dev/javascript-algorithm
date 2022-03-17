function solution1(s, e) {
  const distance = Array.from({ length: 10001 }, () => 0);
  const visited = Array.from({ length: 10001 }, () => false);
  const queue = [];

  visited[s] = true;
  queue.push(s);

  while (queue.length !== 0) {
    const x = queue.shift();

    for (const newX of [x - 1, x + 1, x + 5]) {
      if (newX === e) {
        return distance[x] + 1;
      }

      if (newX > 0 && newX <= 100000 && !visited[newX]) {
        visited[newX] = true;
        queue.push(newX);
        distance[newX] = distance[x] + 1;
      }
    }
  }
}

function solution2(s, e) {
  const ch = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  queue.push(s);
  ch[s] = 1;

  let L = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) {
          return L + 1;
        }

        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }

    L++;
  }
}

let s = 5;
let e = 14;

console.log(solution1(s, e));
console.log(solution2(s, e));
