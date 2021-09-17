function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let e of songs) {
    if (sum + e > capacity) {
      cnt++;
      sum = e;
    } else {
      sum += e;
    }
  }

  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let m = 3;
let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(m, songs));