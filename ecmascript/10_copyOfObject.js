const student = {
  name: {
    firstName: "Alex",
    surName: "Petrov",
  },
  age: 20
};

const newStudent = student;
student.city = "Leningrad";
student.name.firstName = "Sergey";
console.log(student);
console.log(newStudent);