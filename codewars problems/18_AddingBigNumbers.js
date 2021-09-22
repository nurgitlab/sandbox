function add(a, b) {
  let max, min;
  if (a.length > b.length) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  let maxArray = max.split("").reverse().map(a => parseInt(a));
  let minArray = min.split("").reverse().map(b => parseInt(b));

  let mem = 0;

  for (let i = minArray.length; i < maxArray.length; i++) {
    minArray.push(0);
  }

  for (let i = 0; i < maxArray.length; i++) {
    maxArray[i] = maxArray[i] + minArray[i] + mem;
    if (maxArray[i] > 9) {
      maxArray[i] = maxArray[i] % 10;
      mem = 1;
    } else {
      mem = 0;
    }
  }

  if (mem == 1) {
    maxArray.push(mem);
  }

  return maxArray.reverse().join("");
}

console.log(add("1", "9999"));