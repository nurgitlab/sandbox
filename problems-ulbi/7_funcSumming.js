function sum(a) {

  let currentSum = a;

  let f = (b) => {
    currentSum += b;
    return f;
  };

  f.toString = () => {
    return currentSum;
  };

  return f;
}


console.log(sum(1)(2)(3));