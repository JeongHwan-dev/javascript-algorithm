// Solution 1
// Queue 와 indexOf() 메서드를 활용한 솔루션
function solution1(requiredSubjects, subjects) {
  const requiredArr = requiredSubjects.split('');

  for (const subject of subjects) {
    if (requiredArr.indexOf(subject) !== -1) {
      if (requiredArr.indexOf(subject) === 0) {
        requiredArr.shift();
      } else {
        break;
      }
    }
  }

  return requiredArr.length > 0 ? 'NO' : 'YES';
}

// Solution 2
// Queue 와 includes() 메서드를 활용한 솔루션
function solution2(requiredSubjects, subjects) {
  let result = 'YES';
  const requiredArr = requiredSubjects.split('');

  for (const subject of subjects) {
    if (requiredArr.includes(subject)) {
      if (subject !== requiredArr.shift()) {
        result = 'NO';
        break;
      }
    }
  }

  if (requiredArr.length > 0) {
    result = 'NO';
  }

  return result;
}

// Solution 3
// charAt() 과 substring() 메서드를 활용한 솔루션
function solution3(requiredSubjects, subjects) {
  for (const subject of subjects) {
    if (requiredSubjects.length === 0) {
      break;
    }

    if (subject === requiredSubjects.charAt(0)) {
      requiredSubjects = requiredSubjects.substring(1);
    } else if (requiredSubjects.includes(subject)) {
      break;
    }
  }

  return requiredSubjects ? 'NO' : 'YES';
}

let requiredSubjects = 'CBA';
let subjects = 'CBDAGE';

console.log(solution1(requiredSubjects, subjects));
console.log(solution2(requiredSubjects, subjects));
console.log(solution3(requiredSubjects, subjects));

requiredSubjects = 'CBA';
subjects = 'CADBGE';

console.log(solution1(requiredSubjects, subjects));
console.log(solution2(requiredSubjects, subjects));
console.log(solution3(requiredSubjects, subjects));
