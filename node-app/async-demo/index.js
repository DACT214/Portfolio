console.log("Before");
//Callbacks
// getUser(1, (user) => {
//   getRepository(user.gitHubUsername, (repo) => {
//     getCommits(repo, (commits) => {
//       console.log(commits);
//     });
//   });
// });

console.log("After");

// Promises

getUser(1)
  .then((user) => getRepository(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log(`commits ${commits}`))
  .catch((err) => console.log(`Error: ${err.message}`));

// Async/await
// async function displayCommits() {
//   try {
//     const user = await getUser(1);
//     const repo = await getRepository(user.gitHubUsername);
//     const commits = await getCommits(repo[0]);
//     console.log(commits);
//   } catch (err) {
//     console.log("ERROR", err.message);
//   }
// }

// displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    // async work
    setTimeout(() => {
      console.log("reading a user from a database...");
      resolve({ id: id, gitHubUsername: "david" });
    }, 2000);
  });
}

function getRepository(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading repos...");
      resolve(["repo1", "repo2", "repo3"]);
      // reject(new Error("Something went wrong"));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling api...");
      resolve(["commit"]);
    }, 2000);
  });
}
