function solution1(s) {
  let answer;
  let arr = s.split("");

  if (arr.length % 2 != 0) {
    answer = arr[Number.parseInt(arr.length / 2)];
  } else {
    answer = arr[arr.length / 2 - 1] + arr[arr.length / 2];
  }

  return answer;
}

function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 == 1) {
    answer = s.substring(mid, mid + 1);
  } else {
    answer = s.substring(mid - 1, mid + 1);
  }

  return answer;
}

function solution3(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 == 1) {
    answer = s.substr(mid, 1);
  } else {
    answer = s.substr(mid - 1, 2);
  }

  return answer;
}

console.log(solution1("study"));
console.log(solution1("good"));
console.log(solution1("teacher"));

console.log(solution2("study"));
console.log(solution2("good"));
console.log(solution2("teacher"));

console.log(solution3("study"));
console.log(solution3("good"));
console.log(solution3("teacher"));
