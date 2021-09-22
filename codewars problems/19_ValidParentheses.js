function validParentheses(parens) {
  let letteredParens = parens.split("").map((symbol) => {
    if (symbol == "(") {
      symbol = "a";
    } else {
      symbol = "b";
    }
    return symbol;
  }).join("");

  for (let i = 0; i < letteredParens.length + 3; i++) {
    letteredParens = letteredParens.replace(/ab/g, "");
  }

  let answer;

  if (!letteredParens) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

console.log(validParentheses("(())((()())())"  ));