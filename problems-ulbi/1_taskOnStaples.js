// let inputArray;
// let ansMem = input;
//
// while (!0) {
//   inputArray = input.split("");
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] == "(" && inputArray[i + 1] == ")") {
//       inputArray[i] = "";
//       inputArray[i + 1] = "";
//     }
//   }
//   input = inputArray.join("");
//   if (input == ansMem) break;
//   ansMem=input
// }
//
// return input;

function checkOnCorrect(input) {
  let mem = input;
  while (!0) {
    input = input.split("()").join("");
    input = input.split("[]").join("");
    input = input.split("{}").join("");
    if (mem == input) break;
    mem = input;
  }
  if (mem) {
    return false;
  } else {
    return true;
  }
}

console.log(checkOnCorrect("[()({[][]})]"));