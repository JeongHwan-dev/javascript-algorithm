// Solution 1
// Map 객체와 구조 분해 할당을 활용한 솔루션

function solution1(str) {
  let electedStudent;
  let max = Number.MIN_SAFE_INTEGER;
  const voteMap = new Map();

  for (const vote of str) {
    voteMap.has(vote)
      ? voteMap.set(vote, voteMap.get(vote) + 1)
      : voteMap.set(vote, 1);
  }

  for (const [key, value] of voteMap) {
    if (value > max) {
      max = value;
      electedStudent = key;
    }
  }

  return electedStudent;
}

// Solution 2
// Map 객체와 Array.from(), sort() 메서드를 활용한 솔루션

function solution2(str) {
  const voteMap = new Map();

  for (const vote of str) {
    voteMap.has(vote)
      ? voteMap.set(vote, voteMap.get(vote) + 1)
      : voteMap.set(vote, 1);
  }

  const electedStudent = Array.from(voteMap).sort((a, b) => b[1] - a[1])[0][0];

  return electedStudent;
}

let str = 'BACBACCACCBDEDE';

console.log(solution1(str));
console.log(solution2(str));
