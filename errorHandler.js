const errorHandler = (error) => {
  const { name, message, stack } = error;
  //log the error
  logger.error({
    name,
    message,
    stack,
  });
};
const error = () => {
  console.log("two");
};

//for single export which is called default export
// module.exports = errorHandler;

//for multiple export it's called name export
module.exports.errorHandler = errorHandler;
module.exports.error = error;

//another way
module.exports = { errorHandler, error };
console.log(module);
