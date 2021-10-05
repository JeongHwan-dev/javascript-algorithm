// Solution 1
// 1. 3장의 카드 숫자를 더한 값을 담을 Set 객체 생성
// 2. 3중 for 문을 사용해 n개의 카드 중 3장의 카드를 뽑아 만들 수 있는 합을 set에 담기
// 3. Set 객체의 특성으로 중복 제거된 상태로 저장
// 4. Array.from() 메서드를 사용해 Set 객체를 배열 상태로 변경 후 sort() 메서드를 사용해 내림차순으로 정렬
// 5. 반환 시 sortedSum[k - 1]로 반환하면 k 번째로 큰 수 반환

function solution(n, k, card) {
  const set = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(card[i] + card[j] + card[k]);
      }
    }
  }

  const sortedSum = Array.from(set).sort((a, b) => b - a);

  return sortedSum[k - 1];
}

let n = 10;
let k = 3;
let card = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(n, k, card));
