const symbol = Symbol("demo");
const other = Symbol("demo");
// console.log(symbol === other)

const obj = {
  name: "Bonifajii",
  demo: "DEMO",
  [symbol]: "meta"
};

console.log(obj[symbol]);

for (let key in obj) {
  console.log(key);
}