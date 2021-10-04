function generateHashtag(str) {
  str = str.replace(/\s+/g, ' ').trim();
  if (str.length < 140 && str.length > 0) {
    str = str.split(" ").map((word) => {
      let wordArr = word.split("");
      wordArr[0] = wordArr[0].toUpperCase();
      return wordArr.join("");
    });
    return `#${str.join("")}`;
  } else return false;
}

console.log(generateHashtag("    hello     world   "));