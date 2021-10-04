function list(names) {
  if (names.length > 2) {
    let answer = "";
    for (let i = 0; i <= names.length - 3; i++) {
      answer += `${names[i].name}, `;
    }
    answer += `${names[names.length - 2].name} & ${names[names.length - 1].name}`;
    return answer;
  } else if (names.length === 2) {
    return (names[0].name + " & " + names[1].name);
  } else if (names.length === 1) {
    return (names[0].name);
  } else {
    return ("");
  }
}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));