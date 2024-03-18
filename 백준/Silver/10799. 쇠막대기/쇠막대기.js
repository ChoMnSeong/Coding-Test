const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(bracket) {
  let result = 0;
  const stack = [];
  const brackets = bracket.split("");
  brackets.map((e, index) => {
    if (e == "(") {
      stack.push(e);
    } else {
      stack.pop();
      if (bracket[index - 1] == "(") {
        result += stack.length;
      } else {
        result++;
      }
    }
  });
  console.log(result);
}

solution(input);
