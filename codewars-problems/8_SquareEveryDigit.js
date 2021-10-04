function squareDigits(num) {
  return parseInt(num.toString().split("").map((item) => {
    return (Math.pow(parseInt(item), 2)).toString();
  }).join(""));
}

console.log(squareDigits(3344));