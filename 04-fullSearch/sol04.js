// Solution
// 1. 최대 사줄 수 있는 선물 수를 카운트할 maxCount 변수를 0으로 초기화
// 2. 선물 가격과 배송비가 들어있는 배열을 선물 + 배송비 가격을 기준으로 오른차순 정렬
// 3. for 문을 사용해 50% 할인할 선물을 하나 설정 후 남은 가격에서 살수 있느 최대 선물 개수 카운트
// 4. Math.max() 메서드를 사용해 최대 살 수 있는 선물 개수 반환

function solution(n, m, product) {
  let maxCount = 0;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < n; j++) {
      const cost = product[j][0] + product[j][1];

      if (j === i) {
        continue;
      }

      if (j !== i && cost > money) {
        break;
      } else if (j !== i && cost <= money) {
        money -= cost;
        count++;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

let n = 5;
let m = 28;
let product = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(n, m, product));
