// Solution 1
// 전위순회 출력
function solution1(v) {
  function dfs(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  }

  dfs(v);
}

// Solution 2
// 중위순회 출력
function solution2(v) {
  function dfs(v) {
    if (v > 7) {
      return;
    } else {
      dfs(v * 2);
      console.log(v);
      dfs(v * 2 + 1);
    }
  }

  dfs(v);
}

// Solution 3
// 후위순회 출력
function solution3(v) {
  function dfs(v) {
    if (v > 7) {
      return;
    } else {
      dfs(v * 2);
      dfs(v * 2 + 1);
      console.log(v);
    }
  }

  dfs(v);
}

let v = 1;

solution1(v);
solution2(v);
solution3(v);
