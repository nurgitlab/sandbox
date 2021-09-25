function bind(logPerson) {
  return function (person) {
    return (
      `Person ${person}, and we've info: 
      ${logPerson.name},
      ${logPerson.age},
      ${logPerson.job}`
    );
  };
}

const AnnaInfo = {name: "Anna", age: 228, job: "homeless"};
let bindInfo = bind(AnnaInfo);
console.log(bindInfo(AnnaInfo.name));

const BobInfo = {name: "Bob", age: 22, job: "React developer"};
bindInfo = bind(BobInfo);
console.log(bindInfo(BobInfo.name))

