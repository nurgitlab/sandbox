// leningrad - false
// bob - true
// bobslan - false
// ubunubu - true

function palindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  if (reversedWord == word) {
    return ("true");
  } else {
    return ("false");
  }
}

word = "helleh";

console.log(palindrome(word));