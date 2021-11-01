// Solution 1
// sort() 메서드와 forEach(), Math.max() 메서드를 이용한 솔루션
function solution1(times) {
  let maxHeadcount = Number.MIN_SAFE_INTEGER;
  const timeline = [];

  for (const time of times) {
    const [inTime, outTime] = time;
    timeline.push([inTime, 'in']);
    timeline.push([outTime, 'out']);
  }

  timeline.sort((a, b) =>
    a[0] === b[0] ? b[1].charCodeAt() - a[1].charCodeAt() : a[0] - b[0]
  );

  let headcount = 0;

  timeline.forEach(([time, action]) => {
    action === 'in' ? headcount++ : headcount--;

    maxHeadcount = Math.max(maxHeadcount, headcount);
  });

  return maxHeadcount;
}

// Solution 2
// forEach() 메서드와 Math.max() 메서드를 이용한 솔루션
function solution2(times) {
  const END_TIME = 72;
  const timeline = Array.from({ length: END_TIME + 1 }, () => 0);

  times.forEach(([inTime, outTime]) => {
    for (let i = inTime; i < outTime; i++) {
      timeline[i]++;
    }
  });

  const maxHeadcount = Math.max(...timeline);

  return maxHeadcount;
}

let times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution1(times));
console.log(solution2(times));
