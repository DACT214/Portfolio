const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async 1");
    resolve(1);
    // reject(new Error("Something Failed"));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("async 2");
    resolve(2);
  }, 2000);
});

Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("ERROR: ", err.message));
