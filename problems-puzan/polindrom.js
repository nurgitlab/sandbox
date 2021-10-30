const checkOnPolindrom = (inputString) => {
  const reversedString = inputString.split("").reverse().join("");
  if (inputString === reversedString) {
    return true;
  } else {
    return false;
  }
};

console.log(checkOnPolindrom("r1sfsr"));