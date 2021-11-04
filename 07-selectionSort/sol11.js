// Solution 1
// 결정 알고리즘을 이용한 솔루션
function getCount(songs, capacity) {
  let count = 1;
  let sum = 0;

  songs.forEach((song) => {
    if (sum + song > capacity) {
      count++;
      sum = song;
    } else {
      sum += song;
    }
  });

  return count;
}

function solution(m, songs) {
  let minCapacity;
  let leftPoint = Math.max(...songs);
  let rightPoint = songs.reduce((acc, cur) => acc + cur, 0);

  while (leftPoint <= rightPoint) {
    const mid = parseInt((leftPoint + rightPoint) / 2);

    if (getCount(songs, mid) <= m) {
      minCapacity = mid;
      rightPoint = mid - 1;
    } else {
      leftPoint = mid + 1;
    }
  }

  return minCapacity;
}

let m = 3;
let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(m, songs));
