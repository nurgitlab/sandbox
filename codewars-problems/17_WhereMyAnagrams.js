function anagrams(word, words) {
  let answer = [];
  let lettersFromWord = word.split("").sort();
  words.map((wordFromArray) => {
    if (lettersFromWord.length == wordFromArray.length) {
      let m = true;
      let sortedWordFromArray = wordFromArray.split("").sort();
      for (let i = 0; i < wordFromArray.length; i++) {
        if (lettersFromWord[i] != sortedWordFromArray[i]) {
          m = false;
        }
      }
      if (m) {
        answer.push(wordFromArray);
      }
    }
  });
  return answer;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));