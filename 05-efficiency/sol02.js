// Solution 1
// 1. 공통 요소를 담을 새 배열 commonArr 배열을 빈 배열로 생성
// 2. sort() 메서드를 사용하여 arr1, arr2 배열을 오름차순으로 정렬
// 3. 이중 for 문을 사용하여 동일한 요소가 있는지 확인하고 있다면 commonArr 배열에 추가
function solution1(arr1, arr2) {
  const commonArr = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (const n1 of arr1) {
    for (const n2 of arr2) {
      if (n1 === n2) {
        commonArr.push(n1);
      }
    }
  }

  return commonArr;
}

// Solution 2
// 1. 공통 요소를 담을 새 배열 commonArr 배열을 빈 배열로 생성
// 2. 포인터로 사용할 p1, p2 변수 0으로 초기화하여 생성
// 3. sort() 메서드를 사용하여 arr1, arr2 배열을 오름차순으로 정렬
// 4. 투 포인터를 이용하여 포인터 둘 중 하나가 배열의 끝을 가리킬 때까지 while 문을 이용하여 반복
// 5. 먄약 두 배열 요소가 같다면 commonArr 배열에 추가해주고 두 포인터를 +1 하여 한칸 앞으로 이동
// 6. 만약 '포인터1'이 가리키는 요소가 '포인터2'가 가리키는 요소보다 작다면 '포인터1'만 +1 해서 한칸 앞으로 이동
// 7. 만약 그 반대라면 '포인터2'를 +1 해서 한 칸 앞으로 이동
function solution2(arr1, arr2) {
  const commonArr = [];
  let p1 = (p2 = 0);

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      commonArr.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return commonArr;
}

// Solution 3
// 1. filter() 메서드를 사용하여 arr1 배열 요소 중 arr2 배열 안에도 있는 요소만 필터링해서 새 배열 반환
// 2. sort() 메서드를 사용하여 배열을 오름차순으로 정렬
function solution3(arr1, arr2) {
  const commonArr = arr1.filter((n) => arr2.includes(n)).sort((a, b) => a - b);

  return commonArr;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution1(arr1, arr2));
console.log(solution2(arr1, arr2));
console.log(solution3(arr1, arr2));
