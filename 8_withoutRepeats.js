// [1,1,2,2,3,4,5,5] -> [3,4]

function withoutRepeats(defaultArray) {
  const sortedArray = defaultArray.sort();
  let answer = "";
  for (let i = 0; i < sortedArray.length; i++) {
    if (i == 0) {
      if (sortedArray[i] != sortedArray[i + 1]) {
        answer = sortedArray[i];
      }
    } else if (i == sortedArray.length - 1) {
      if (sortedArray[i] != sortedArray[i - 1]) {
        answer = answer + " " + sortedArray[i];
      }
    } else {
      if ((sortedArray[i] != sortedArray[i - 1]) && ((sortedArray[i] != sortedArray[i + 1]))) {
        answer = answer + " " + sortedArray[i];
      }
    }
  }
  return answer;
}

console.log(withoutRepeats([1, 1, 2, 2, 3, 4, 5, 5, 9]));