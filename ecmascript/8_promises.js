// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 4000);
// });

const delay = ms => new Promise(((resolve, reject) => {
  setTimeout(() => reject(`Done ${ms}`), ms);
}));

// delay(1000)
//     .then(data => (delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(()=>console.log("finally")))

async function asyncDelay() {
  try {
    const data = await delay(2000)
    console.log(data)
  } catch (e) {
    console.log("Error", e)
  }
}
asyncDelay()