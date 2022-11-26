//it's called common js import
const errorHandler = require("./errorHandler.js");
async function getData() {
  try {
    undefined.find();
  } catch (error) {
    errorHandler(error);
  }
}
getData();
