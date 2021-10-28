// //Clousers
// function sum(a) {
//   return function lock(b) {
//     return a + b;
//   };
// }
//
// let firstItem = sum(10);
// console.log(firstItem);
//
// let totalSum = firstItem(20);
// console.log(totalSum);

// function createFrameworkManager() {
//   const fw = ["Angular", "Vue", "React"]
//   return {
//     print: function () {
//       console.log(fw)
//     },
//     add: function (framework) {
//       fw.push(framework)
//     }
//   }
// }
// const manager = createFrameworkManager()
// manager.print()
// manager.add("Hi")
// manager.print()


// const someNumbers = [1, 2, 3, 4, 5, 6, 7];
//
// for (var i = 0; i < someNumbers.length; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(someNumbers[j])
//     },2000)
//   })(i)
// }


