function pigIt(str) {
  let strArray = str.split(" ");

  return strArray.map((word) => {
    if (word == "." || word == "!" || word == ","
      || word == "?") {
      return word;
    } else {
      let wordArray = word.split("");
      wordArray[wordArray.length]=wordArray[0]
      wordArray[0] = "";
      return (`${wordArray.join("")}ay`);
    }
  }).join(" ");
}

console.log(pigIt('Hello world !'));