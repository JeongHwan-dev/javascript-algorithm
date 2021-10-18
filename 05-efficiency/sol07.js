// Solution 1
// Map 객체를 활용한 솔루션

function solution1(str1, str2) {
  let answer = 'YES';
  const str1Map = new Map();
  const str2Map = new Map();

  for (const c of str1) {
    if (str1Map.has(c)) {
      str1Map.set(c, str1Map.get(c) + 1);
    } else {
      str1Map.set(c, 1);
    }
  }

  for (const c of str2) {
    if (str2Map.has(c)) {
      str2Map.set(c, str2Map.get(c) + 1);
    } else {
      str2Map.set(c, 1);
    }
  }

  for (const [key] of str1Map) {
    if (str2Map.has(key)) {
      if (str1Map.get(key) !== str2Map.get(key)) {
        answer = 'NO';
        break;
      }
    } else {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

// Solution 2
// Map 객체를 활용한 솔루션

function solution2(str1, str2) {
  let answer = 'YES';
  const str1Map = new Map();

  for (const c of str1) {
    if (str1Map.has(c)) {
      str1Map.set(c, str1Map.get(c) + 1);
    } else {
      str1Map.set(c, 1);
    }
  }

  for (const c of str2) {
    if (!str1Map.has(c) || str1Map.get(c) === 0) {
      answer = 'NO';
      break;
    } else {
      str1Map.set(c, str1Map.get(c) - 1);
    }
  }

  return answer;
}

// Solution 3
// Map 객체를 활용한 솔루션

function solution3(str1, str2) {
  const str1Map = new Map();
  const str2Map = new Map();

  for (const c of str1) {
    str1Map.has(c) ? str1Map.set(c, str1Map.get(c) + 1) : str1Map.set(c, 1);
  }

  for (const c of str2) {
    str2Map.has(c) ? str2Map.set(c, str2Map.get(c) + 1) : str2Map.set(c, 1);
  }

  if (str1Map.size !== str2Map.size) {
    return 'NO';
  }

  for (const [key, value] of str1Map) {
    if (!str2Map.has(key) || str2Map.get(key) !== value) {
      return 'NO';
    }
  }

  return 'YES';
}

let str1 = 'AbaAeCe';
let str2 = 'baeeACA';

console.log(solution1(str1, str2));
console.log(solution2(str1, str2));
console.log(solution3(str1, str2));

str1 = 'abaCC';
str2 = 'Caaab';

console.log(solution1(str1, str2));
console.log(solution2(str1, str2));
console.log(solution3(str1, str2));
