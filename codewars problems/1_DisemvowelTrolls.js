// function disemvowel(str) {
//   let strArray = str.split("").map((letter) => {
//     if (letter === "a" || letter === "e" || letter === "u"
//       || letter === "i" || letter === "o"
//       || letter === "A" || letter === "E" || letter === "U"
//       || letter === "I" || letter === "O") {
//       letter = "";
//     }
//     return letter;
//   }).join("");
//
//   return strArray;
// }

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

//WOW!

console.log(disemvowel("This website is for losers LOL!"));

