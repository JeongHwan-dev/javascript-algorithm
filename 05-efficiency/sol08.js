// Solution 1
// Map 객체와 투포인터를 활용한 솔루션
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

function solution1(s, t) {
  let count = 0;
  const sH = new Map();
  const tH = new Map();

  for (const c of t) {
    if (tH.has(c)) {
      tH.set(c, tH.get(c) + 1);
    } else {
      tH.set(c, 1);
    }
  }

  const len = t.length - 1;

  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    } else {
      sH.set(s[i], 1);
    }
  }

  let lt = 0;

  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    } else {
      sH.set(s[rt], 1);
    }

    if (compareMaps(sH, tH)) {
      count++;
    }

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) {
      sH.delete(s[lt]);
    }

    lt++;
  }

  return count;
}

// Solution 2
// Map 객체와 slice() 메서드를 활용한 솔루션
function isAnagram(str1, str2) {
  const str1Map = new Map();
  const str2Map = new Map();

  for (const c of str1) {
    str1Map.has(c) ? str1Map.set(c, str1Map.get(c) + 1) : str1Map.set(c, 1);
  }

  for (const c of str2) {
    str2Map.has(c) ? str2Map.set(c, str2Map.get(c) + 1) : str2Map.set(c, 1);
  }

  if (str1Map.size !== str2Map.size) {
    return false;
  }

  for (const [key, value] of str1Map) {
    if (!str2Map.has(key) || str2Map.get(key) !== value) {
      return false;
    }
  }

  return true;
}

function solution2(s, t) {
  const len = t.length;
  let count = 0;

  for (let i = 0; i < s.length - len + 1; i++) {
    const part = s.slice(i, i + len);

    if (isAnagram(t, part)) {
      count++;
    }
  }

  return count;
}

let s = 'bacaAacba';
let t = 'abc';

console.log(solution1(s, t));
console.log(solution2(s, t));
