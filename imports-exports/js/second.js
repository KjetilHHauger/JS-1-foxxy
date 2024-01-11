import { someName as userName, logName as personName } from "./script.js";
// import { logName as personName } from "./script.js";

console.log(userName);


personName("Thomas");

/*
Create 3 files

1st
Main file (JS)
import the greet user function

2nd
Utils file(util.js) (All functions that will be reused)(Actions)
Create an action that greets the user "Welcome to our world"

3rd
User file(user.js) add a variable called "userName"
import userName into the main
*/