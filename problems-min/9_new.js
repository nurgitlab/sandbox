function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// const cat = new Cat("black", "Barsik")
// console.log(cat)

// function myNew(constructor, ...args) {
//   const obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype);
//   return constructor.apply(obj, args) || obj;
// }
//
// //ES5
// const cat = myNew(Cat, "black", "Barsik");
// console.log(cat);

const cat = new Cat();
console.log(cat);