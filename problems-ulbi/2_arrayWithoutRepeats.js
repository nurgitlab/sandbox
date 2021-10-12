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
  inputArray.sort((a, b) => {
    if (a - b > 0) {
      return 1;
    } else {
      return -1;
    }
  });

  let flag = 0;
  let prevItem = null;
  let answer = [];

  inputArray.map((item) => {
    if (prevItem == null) {
      prevItem = item;
    } else if (prevItem == item) {
      flag = 1;
      prevItem = item;
    } else if (prevItem != item) {
      if (flag == 0) {
        answer.push(prevItem);
        prevItem = item;
      } else {
        flag = 0;
        prevItem = item;
      }
    }
  })

  if (flag == 0) {
    answer.push(inputArray[inputArray.length - 1]);
  }

  return answer;
}

const arr = [1, 1, 2, 3, 4, 5, 8, 5, 6, 60, 7, 8, 8, 9, 9, 9, 10, 11];
console.log(withoutRepeats(arr));



