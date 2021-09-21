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

  for (let i = 0; i < minArray.length; i++) {
    if ((maxArray[i] + minArray[i] + mem) > 9) {
      maxArray[i] += minArray[i] - 10 + mem;
      mem = 1;
    } else {
      maxArray[i] += minArray[i] + mem;
      if (maxArray[i] > 9) {
        maxArray[i] = maxArray - 10;
        mem = 1;
      } else {
        mem = 0;
      }

    }
  }

  if (mem == 1) {
    maxArray.push(mem);
  }

  return maxArray.reverse().join("");
}

console.log(add("11", "99"));