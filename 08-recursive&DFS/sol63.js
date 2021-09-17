// 전위순회 출력
function solution1(v) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);

      // 후위순회 출력
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }

  DFS(v);
}

// 중위순회 출력
function solution2(v) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  }

  DFS(v);
}

// 후위순회 출력
function solution3(v) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }

  DFS(v);
}

let v = 1;

solution1(v);
solution2(v);
solution3(v);
