// inputArray.sort((a, b) => {
//   if (a - b > 0) return 1; else return (-1);
// });
//
// let dublArray = [];
// for (let i = 0; i < inputArray.length - 1; i++) {
//   if (inputArray[i] == inputArray[i + 1]) {
//     if (!dublArray.includes(inputArray[i])) {
//       dublArray.push(inputArray[i]);
//     }
//   }
// }
//
// let answer = [];
// inputArray.map((item) => {
//   if (!dublArray.includes(item)) {
//     answer.push(item);
//   }
// });
// return answer;

function withoutRepeats(inputArray) {
  arr.sort((a, b) => {
    if (a - b > 0) {
      return 1;
    } else {
      return -1;
    }
  });
  let uniqArr = [... new Set(arr)]
  arr.map((item)=>{

  })
  return uniqArr
}

const arr = [1, 1, 2, 3, 4, 5, 8, 5, 6, 60, 7, 8, 8, 9, 9, 9, 10];
console.log(withoutRepeats(arr));



