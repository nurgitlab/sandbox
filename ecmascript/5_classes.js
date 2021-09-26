class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name + " says hello");
  }
}

let max = new Person("Max");
max.greet();

console.log(max);

class Student extends Person {
  constructor(name, job) {
    super(name);
    this._job = job;
  }
  greet(){
    console.log("Hile")
  }
}

const frontend = new Student("Mac", "Frontend")
console.log(frontend)
frontend.greet()