// Solution 1
// 1. 합쳐진 배열을 저장할 unionArr 빈 배열 생성
// 2. arr1, arr2 배열의 길이를 n1, n2에 할당
// 3. while 문과 if 문을 통해 arr1, arr2 배열 요소의 값을 비교해 더 낮은 값을 먼저 넣기
// 4. 만약 두 배열 중 남은 요소가 있다면 while 문을 이용해 모두 넣기

function solution1(arr1, arr2) {
  let unionArr = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n1 && p2 < n2) {
    if (arr1[p1] <= arr2[p2]) {
      unionArr.push(arr1[p1++]);
    } else {
      unionArr.push(arr2[p2++]);
    }
  }

  while (p1 < n1) {
    unionArr.push(arr1[p1++]);
  }

  while (p2 < n2) {
    unionArr.push(arr2[p2++]);
  }

  return unionArr;
}

// Solution 2
// 1. 원본 arr1 배열에 영향을 주지 않기 위해 slice() 메서드로 깊은 복사한 _arr1 생성
// 2. 전개 연산자와 push() 메서드를 사용하여 arr2 배열 요소들을 _arr1 에 넣기
// 3. sort() 메서드를 사용하여 오름차순으로 정렬

function solution2(arr1, arr2) {
  const _arr1 = arr1.slice();

  _arr1.push(...arr2);
  _arr1.sort((a, b) => a - b);

  return _arr1;
}

// Solution 3
// 1. 전개 연산자를 사용하여 arr1, arr2 를 합친 unionArr 배열 생성
// 2. sort() 메서드를 사용하여 오름차순으로 정렬

function solution3(arr1, arr2) {
  const unionArr = [...arr1, ...arr2];

  unionArr.sort((a, b) => a - b);

  return unionArr;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution1(arr1, arr2));
console.log(solution2(arr1, arr2));
console.log(solution3(arr1, arr2));
