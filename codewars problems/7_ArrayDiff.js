// function arrayDiff(a, b) {
//   let newA = [];
//   b.map((bItem) => {
//     newA = [];
//     a.map((aItem) => {
//       if (aItem !== bItem) {
//         newA.push(aItem);
//       }
//     });
//     a = newA;
//   });
//   return a;
// }

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1, 1, 2, 3, 3, 4, 1, 1], [3,1]));