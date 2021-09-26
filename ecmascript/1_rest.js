//Rest

function average() {
  return Array.from(arguments).reduce((acc, i) => acc += i, 0) / Array.from(arguments).length;
}
console.log(average(10, 30, 20, 40, 50));

//If functions takes some arguments, but we dont't
//know how much, we can use this method

function average(a,...inputArray) {
  return inputArray.reduce((acc, i) => acc += i, 0) / inputArray.length;
}
console.log(average(10, 30, 20, 40, 50));