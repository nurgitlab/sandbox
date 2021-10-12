const obj1 = {
  name: "Nurbek",
  age: "21",
};

const arr1 = [1, 2, 3];

console.log(obj1);
console.log(Array.isArray(obj1));

const obj2 = JSON.parse(JSON.stringify(obj1))
obj1.name="Nuka"

console.log(obj1)
console.log(obj2)
