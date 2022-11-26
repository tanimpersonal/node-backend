const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const getData = async (res) => {
  res = await promise;
  console.log(res);
};
getData();

async function call() {
  const res = await fetch("");
  const user = res.json();
  console.log(user);
}
call();
