console.log("Запрос данных...");

// setTimeout(() => {
//   console.log("Подготовка данных");
//
//   const backendData = {
//     server: "aws",
//     port: 28,
//     status: "работает"
//   };
//
//   setTimeout(() => {
//     backendData.modifed = true
//     console.log("Данные получены:", backendData);
//   }, 3000);
// }, 3000);
// - слишком высокий порядок вложенности

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных");
//
//     const backendData = {
//       server: "aws",
//       port: 28,
//       status: "работает"
//     };
//
//     resolve(backendData);
//   }, 3000);
// });
//
// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modifed = true;
//       reject(data);
//     }, 3000);
//   });
// })
//   .then(clientData => {
//     console.log("Данные получены:", clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .catch(err => console.log("Ошибка", err))
//   .finally(() => console.log("Финал")); - в целом промисы освоены

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};
// sleep(3000).then(()=>console.log("После трёх секунд"))
// sleep(5000).then(()=>console.log("После пяти секунд"))
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("Все промисы выполнены"); // - ждёт выполнения всех промисов
});
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race промисы выполнены"); // - ждёт выполнения самого быстрого
});