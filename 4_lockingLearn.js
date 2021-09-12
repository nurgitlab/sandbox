// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
//
// const calc = createCalcFunction(42);
// calc()


function createSum(n) {
  return function (m) {
    return (n + m);
  };
}

let addNum = createSum(1);

console.log(addNum(10));
console.log(addNum(41));

addNum = createSum(5);
console.log(addNum(10));