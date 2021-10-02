// 모든 솔루션에서 공통으로 사용하는 소수 판별 함수

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Solution 1
// 1. arr 배열을 뒤집기 위해 숫자를 뒤집는 reverse() 함수를 만들고 map() 메서드를 사용하여 모든 arr 배열 숫자를 뒤집은 새 배열 생성
// 2. filter() 메서드와 소수를 판별하는 isPrime() 함수를 사용해 reversedArr 배열에서 소수인 숫자만 걸러내어 새 배열 생성

function reverse(number) {
  const reversedNumber = Number(number.toString().split('').reverse().join(''));

  return reversedNumber;
}

function solution1(arr) {
  const reversedArr = arr.map((number) => reverse(number));
  const primeNumbers = reversedArr.filter(isPrime);

  return primeNumbers;
}

// Solution 2
// 1. 숫자를 뒤집어 만든 소수만을 담을 primeNumbers 배열을 빈 배열로 생성
// 2. for 문을 통해 arr 배열의 숫자 요소들을 탐색
// 3. while 문을 사용하여 숫자를 뒤집기
// 4. isPrime() 함수를 통해 소수 판별이 되면 primeNumbers 배열에 추가

function solution2(arr) {
  const primeNumbers = [];

  for (let number of arr) {
    let reversedNumber = 0;

    while (number) {
      const tmp = number % 10;

      reversedNumber = reversedNumber * 10 + tmp;
      number = parseInt(number / 10);
    }

    if (isPrime(reversedNumber)) {
      primeNumbers.push(reversedNumber);
    }
  }

  return primeNumbers;
}

// Solution 3
// 1. 숫자를 뒤집어 만든 소수만을 담을 primeNumbers 배열을 빈 배열로 생성
// 2. for 문을 통해 arr 배열의 숫자 요소들을 탐색
// 3. Number(), toString(), split(), reverse(), join() 메서드 들을 사용하여 뒤집힌 숫자 만들기
// 4. isPrime() 함수를 통해 소수 판별이 되면 primeNumbers 배열에 추가

function solution3(arr) {
  const primeNumbers = [];

  for (const number of arr) {
    const reversedNumber = Number(
      number.toString().split('').reverse().join('')
    );

    if (isPrime(reversedNumber)) {
      primeNumbers.push(reversedNumber);
    }
  }

  return primeNumbers;
}

let arr = [32, 55, 62, 20, 260, 370, 200, 30, 100];

console.log(solution1(arr));
console.log(solution2(arr));
console.log(solution3(arr));
