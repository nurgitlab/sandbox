// scope - область видимости переменных
// context - то, как была вызвана функция

// const person = {
//   surname: "Stark",
//   knows: function (what, name) {
//     console.log(`You ${what} know about ${name} | ${this.surname}`);
//   }
// };
//
// const john = {
//   surname: "Snow"
// }
//
// person.knows("LOIN", "Boni")
// person.knows.call(john, "TIGER", "Sher-Khan")
// person.knows.apply(john, ["TIGER", "Sher-Khan"])
//
// //ES6+
// person.knows.call(john, ...["TIGER", "Sher-Khan"])
// person.knows.bind(john, "TIGER", "Sher-Khan")() // -возвращает функцию

// //=====
// function Person(name, age) {
//   this.name = name
//   this.age = age
//   console.log(this)
// }
// const nurba = new Person("Nurbek", 20)
//
// //===== явный
// function logThis() {
//   console.log(this)
// }
//
// const obj = {num: 40}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

//===== неявный
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this)
//   }
// }
//
// animal.logThis()

function Cat(color) {
  this.color = color;
  console.log("This", this)
  ;(() => console.log("Meow", this))();
}

new Cat("red");