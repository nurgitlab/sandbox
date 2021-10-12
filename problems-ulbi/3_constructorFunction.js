function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User("Nurbek", 21);
console.log(user instanceof User); //true