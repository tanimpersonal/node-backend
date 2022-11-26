// states: pending, success, rejected
const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1 };
  if (!user) reject("Something went wrong");
  else {
    setTimeout(() => {
      resolve({ name: "john" });
    }, 1000);
  }
});
//consume promise
myPromise
  .then((res) => console.log("hello", res))
  .catch((err) => console.log("bye", err));

//handle multiple promise
const userData = [0, 1, 2, 3, 4, 5];
const response = [];
//loop is a syncronus task but promise is a asynchronus task
for (let i = 0; i < userData.length; i++) {
  const userId = userData[i];
  response.push(myPromise); //it goes to the threadpool but meanwhile the loop also gets executed. so we push every promise in an array in index by index
}
//consume all promise
Promise.all(response).then((res) => console.log(res));
console.log(response);
