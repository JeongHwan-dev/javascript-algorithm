function solution1(s, e) {
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;

  while (queue.length) {
    const x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return dis[x] + 1;
      }

      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = 1;
        dis[nx] = dis[x] + 1;
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
