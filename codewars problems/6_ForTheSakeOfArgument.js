function numbers(inputArray) {
  answer = true;
  inputArray.map((arrayItem) => {
    typeof (arrayItem) != "number" ? answer = false : answer;
  });
  return answer;
}

console.log(numbers([10, 654, 54, 534, 534, 534]));