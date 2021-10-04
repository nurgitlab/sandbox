// function solution(string) {
//   let answer = "";
//   string.split("").map((letter) => {
//     if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
//       answer += " " + letter;
//     } else {
//       answer += letter;
//     }
//   });
//   return answer;
// }

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(solution("camelCasing"));