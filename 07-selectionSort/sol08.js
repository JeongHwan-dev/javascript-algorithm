// Solution 1
// for 문을 이용한 솔루션
function solution1(meetings) {
  const _meetings = meetings.map((meeting) => meeting.slice());
  let maxCount = 0;
  let curEndTime = 0;

  _meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  for (const [startTime, endTime] of _meetings) {
    if (curEndTime <= startTime) {
      maxCount++;
      curEndTime = endTime;
    }
  }

  return maxCount;
}

// Solution 2
// filter() 메서드를 이용한 솔루션
function solution2(meetings) {
  const _meetings = meetings.map((meeting) => meeting.slice());

  _meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let curEndTime = 0;
  const maxCount = _meetings.filter(([startTime, endTime]) => {
    if (curEndTime <= startTime) {
      curEndTime = endTime;
      return true;
    } else {
      return false;
    }
  }).length;

  return maxCount;
}

let meetings = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

console.log(solution1(meetings));
console.log(solution2(meetings));

meetings = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution1(meetings));
console.log(solution2(meetings));
