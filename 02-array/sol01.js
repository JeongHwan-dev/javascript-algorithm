// Solution 1
// 1. 필터링 된 배열을 담을 새 빈 배열 생성
// 2. 배열의 첫 번째 요소는 비교할 앞 수가 없으므로 배열에 바로 넣기
// 3. for 문을 이용해 인덱스 1번 부터 배열 요소 탐색
// 4. if 문을 이용해 바로 앞 수보다 큰 배열 수들만 새 배열에 넣기
function solution1(arr) {
  const filteredArr = [];

  filteredArr.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

// Solution 2
// 1. filter() 메서드를 사용해 인덱스 번호가 0 번이거나 바로 앞 수보다 큰 배열의 수들만으로 이루어진 새 배열 생성
function solution2(arr) {
  const filteredArr = arr.filter((num, idx) => idx === 0 || num > arr[idx - 1]);

  return filteredArr;
}

let arr = [7, 3, 9, 5, 6, 12];

console.log(solution1(arr));
console.log(solution2(arr));
