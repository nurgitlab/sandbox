// let array = [1, 2, 3, 5, 8, 13, 21];
// console.log(...array);

// console.log(Math.max(...array));
//
// let fib = [1, ...array];
// console.log(fib);

// const a = array[0]
// const b = array[1]

// const [a,b]=array
// console.log(a+" "+b)

const adress = {
  country: "Russia",
  city: "Leningrad",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  }
};
// const {city, street, country, concat: adressConcat} = adress;
// console.log(adressConcat.call(adress));
// // console.log(adress.concat())

const {city, ...otherInfo} = adress
console.log(city)
console.log(otherInfo)