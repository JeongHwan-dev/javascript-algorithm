function solution1(str1, str2) {
  let answer = 'YES';
  let sH1 = new Map();
  let sH2 = new Map();

  for (let c of str1) {
    if (sH1.has(c)) {
      sH1.set(c, sH1.get(c) + 1);
    } else {
      sH1.set(c, 1);
    }
  }

  for (let c of str2) {
    if (sH2.has(c)) {
      sH2.set(c, sH2.get(c) + 1);
    } else {
      sH2.set(c, 1);
    }
  }

  for (let [key] of sH1) {
    if (sH2.has(key)) {
      if (sH1.get(key) !== sH2.get(key)) {
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

function solution2(str1, str2) {
  let answer = 'YES';
  let sH = new Map();

  for (let c of str1) {
    if (sH.has(c)) {
      sH.set(c, sH.get(c) + 1);
    } else {
      sH.set(c, 1);
    }
  }

  for (let c of str2) {
    if (!sH.has(c) || sH.get(c) === 0) {
      answer = 'NO';
      break;
    } else {
      sH.set(c, sH.get(c) - 1);
    }
  }

  return answer;
}

let str1 = 'AbaAeCe';
let str2 = 'baeeACA';

console.log(solution1(str1, str2));
console.log(solution2(str1, str2));

str1 = 'abaCC';
str2 = 'Caaab';

console.log(solution1(str1, str2));
console.log(solution2(str1, str2));
