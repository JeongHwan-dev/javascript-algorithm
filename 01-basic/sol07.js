// Solution 1
// 1. for문을 이용해 arr 배열 안에 있는 번호판 탐색
// 2. if문을 이용해 1의 자리 숫자가 day와 일치하는지 확인하고
// 3. 일치하면 answer 값에 +1
function solution1(day, arr) {
  let violatedCarsCount = 0;

  for (const carNumber of arr) {
    if (carNumber % 10 === day) {
      violatedCarsCount++;
    }
  }

  return violatedCarsCount;
}

// Solution 2
// 1. filter() 메서드를 사용해 1의 자리가 day와 일치하는 값들만으로 이루어진 새 배열 생성
// 2. 새 배열의 길이를 통해 위반한 차량 수 반환
function solution2(day, arr) {
  const violatedCars = arr.filter((carNumber) => carNumber % 10 === day);
  const violatedCarsCount = violatedCars.length;

  return violatedCarsCount;
}

let day = 3;
let arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution1(day, arr));
console.log(solution2(day, arr));

day = 0;
arr = [12, 20, 54, 30, 87, 91, 30];

console.log(solution1(day, arr));
console.log(solution2(day, arr));
