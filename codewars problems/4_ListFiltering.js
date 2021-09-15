function filter_list(l) {
  let answer = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof (l[i]) == "number") {
      answer.push(l[i]);
    }
  }
  return answer;
}

console.log(filter_list([1,2,'aasf','1','123',123]))
