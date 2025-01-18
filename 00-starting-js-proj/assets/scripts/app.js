// import { apiKey } from "./util.js";
import apiKey from "./util.js";

import * as utils from "./util.js";

console.log(apiKey); // egvfdhgjghfjgj
console.log(utils.default); // egvfdhgjghfjgj

const password = prompt("Enter your password: ");

if (password === "Hello") {
  console.log("Hello Welcome!");
} else if(password === "hello") {
  console.log("hello Welcome!");
} else {
  console.log("Wrong password!");
}