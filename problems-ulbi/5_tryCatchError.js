const checkFunction = (a, b) => {
  try {
    return 1;
    // c = a + b;
    // console.log("Block try");
  } catch (e) {
    // console.log("Come to error");
    return 2;
  } finally {
    // console.log("Finally block " + c);
    return 3;
  }
};

let a = 5, b = 3;
let c = 0;

console.log(checkFunction(a, b));

