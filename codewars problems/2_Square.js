// let isSquare = n => {
//   if (n < 0) {
//     return false;
//   } else {
//     if (Math.floor(Math.sqrt(n)) - Math.sqrt(n) === 0) {
//       return true;
//     } else return false;
//   }
// };

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(90));
