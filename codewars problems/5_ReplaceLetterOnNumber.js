function alphabetPosition(text) {
  let answerArr = [];
  let arrOfLetters = text.toLowerCase().split("").map((letter) => {
    if (letter.charCodeAt() > 96 && letter.charCodeAt() < 123) {
      answerArr.push(letter.charCodeAt() - 96);
    }
  });
  return answerArr.join(" ");
}

console.log(alphabetPosition("ABcf gtr"));