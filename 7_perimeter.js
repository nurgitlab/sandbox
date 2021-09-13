const matrix = [
  'XOOXO',
  'XOOXO',
  'OOOXO',
  'XXOXO',
  'OXOOX'
];

let answer = 0;

let newMatrix = [''];
newMatrix[0] = "";
newMatrix[matrix.length + 1] = "";
const p = "*";

for (let i = 1; i < matrix.length + 1; i++) {
  newMatrix[i] = p + matrix[i - 1] + p;
}

for (let i = 0; i < newMatrix.length; i++) {
  newMatrix[0] += p;
  newMatrix[matrix.length + 1] += p;
}

for (let i = 1; i < newMatrix.length - 1; i++) {
  for (let j = 1; j < newMatrix[i].length - 1; j++) {
    if (newMatrix[i][j] == "X") {
      if (newMatrix[i - 1][j] != "X") {
        ++answer;
      }
      if (newMatrix[i][j - 1] != "X") {
        ++answer;
      }
      if (newMatrix[i + 1][j] != "X") {
        ++answer;
      }
      if (newMatrix[i][j + 1] != "X") {
        ++answer;
      }
    }
  }
}

console.log(answer);