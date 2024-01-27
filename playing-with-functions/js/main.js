/* 

Variable function 
cant not use function before the function if set to a variable

const showPetName = function (name) {
    console.log("The pet name is:  " + name);
}

Fat Arrow Functions
*/

const showPetName = (name) => console.log("The pet name is:  " + name);

showPetName("Kjetil");


showPetNameTwo("Hesh");

function showPetNameTwo (name) {
    console.log("The pet name is:  " + name);
}


const sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(100, 200);
/* CRUD most important in Java Script
Create - Create something to be posted (buying a ticket on Ruter)
Read - Searching for something to be posted (When you get the ticket)
Update - Update your post
Delete - Delete your post
*/

/* JSON

JSON is a text format that consists of key-value pairs, where each key is a string and each value can be a string, number, boolean, array, or another JSON object. Here's a simple example of JSON:

{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isStudent": false,
  "hobbies": ["reading", "coding", "traveling"]
}

*/