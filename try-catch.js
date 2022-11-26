async function getData() {
  try {
    undefined.find();
  } catch (error) {
    errorHandler(error);
  }
}
const errorHandler = (error) => {
  const { name, message, stack } = error;
  //log the error
  logger.error({
    name,
    message,
    stack,
  });
};
getData();
//if we didn't use catch block then we couldn't even run the script
console.log("done");
