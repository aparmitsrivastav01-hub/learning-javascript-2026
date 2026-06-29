// Promise kya hota hai?

// Promise = "Main future me result dunga."


const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async task
  // DB calls, cryptography, network requests

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("ASYNC TASK 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("ASYNC 2 RESOLVED");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "CHAI", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Srivastav", pass: "123" });
    } else {
      reject("ERRROR: SOMETHING WENT WRONG");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("Finally Promised ended"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JABHASCRIPT", pass: "123" });
    } else {
      reject("ERRROR: JS WENT WRONG");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data =  await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
    return respone.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log("E",error)
)
