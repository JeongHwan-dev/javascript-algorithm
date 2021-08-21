function solution1(word) {
  let answer = "YES";
  let lowerWord = word.toLowerCase();
  let len = lowerWord.length;
  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (lowerWord[i] !== lowerWord[len - i - 1]) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

function solution2(word) {
  let answer = "YES";
  word = word.toLowerCase();
  let rWord = word.split("").reverse().join("");

  if (word !== rWord) {
    answer = "NO";
  }

  return answer;
}

let word = "happy";

console.log(solution1(word));
console.log(solution2(word));
