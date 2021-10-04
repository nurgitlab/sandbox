// 1, 1, 2, 3, 5, 8, 13, ...

function fibonachiNumber(n) {
  let answer = 1;
  if (n > 2) {
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = 2; i < n; i++) {
      answer = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = answer;
    }
  }
  return answer;
}

console.log(fibonachiNumber(7))