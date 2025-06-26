const p = new Promise((resolve, reject) => {
  // async work goes here...
  setTimeout(() => {
    resolve(1); // pending -> resolved, fulfilled
    reject(new Error("message")); // pending -> rejected
  }, 2000);
});

p.then((result) => console.log(`result ${result}`)).catch((err) =>
  console.log(`Error ${err.message}`)
);
