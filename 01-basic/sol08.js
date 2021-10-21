// Solution 1
// 1. 원본 배열이 변경되지 않도록 전개 연산자를 이용해 키 배열 깊은 복사
// 2. 배열의 길이를 통해 현재 난쟁이 수 반환
// 3. reduce() 메서드를 사용해 키값의 총합을 반환
// 4. 이중 for문을 이용해 두 명이 빠졌을 때 키값의 총합이 100이 될 때를 확인
// 5. 난쟁이가 아닌 두 명을 찾았다면 그 두 명의 키 값을 splice() 메서드를 통해 배열에서 삭제
function solution(heights) {
  const _heights = [...heights];
  const n = _heights.length;
  const totalHeights = _heights.reduce((acc, height) => acc + height, 0);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (totalHeights - (_heights[i] + _heights[j]) === 100) {
        _heights.splice(j, 1);
        _heights.splice(i, 1);
      }
    }
  }

  return _heights;
}

let heights = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(heights));
