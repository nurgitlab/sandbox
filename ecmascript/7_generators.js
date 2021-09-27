const array = [10, 20, 30, 40];
const str = "Hello";

// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iter = str[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let item of array) {
//   console.log(item)
// }

// const countries = {
//   values: ["ru", "kz", "by", "kg"],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.values[i];
//         i++;
//         return {
//           done: i > this.values.length,
//           value
//         };
//       }
//     };
//   }
// };
//
// for (let item of countries) {
//   console.log(item);
// }

//Generators - main idea -
function* gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i;
    } catch (e) {
      console.log("Error", e)
    }
  }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.throw("Error 228"));
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// for (let i of gen(6)){
//   console.log(i)
// }