console.log("array-objects-function");

/* 
This is called a block scope
{
    var name = "hesham";
}

var name = "julie";
    name = "some value";

var inside block scope cant be changed {} is block scope 
*/


/* 

This can not work cause you cant change a const
const CURRENCY = "NOK";

CURRENCY = "USD";
*/

/* 

This can work cause you can change let
let CURRENCY = "NOK";
console.log(CURRENCY);

CURRENCY = "USD";
console.log(CURRENCY);
*/

/*
let name = "Kenneth"; // Global scope
let teacherName = "Hesh";
let teacherFriendName = "Monde";

name = "Erica"; 
The name has been used so in VS code you will get a line trough cause its not a good 
 way to code
console.log(name);

name = "Jonas";
console.log(name);
*/


/*
const API_URL = "http://api.example.com/data";
const PORT  = 8080;
const MAX_CONNECTIONS = 4;

const DB_HOST = `localhost`;

 They do this to tell the other developers
 this is not to be changed, (Thats why the uppercase)

 DO NOT TOUCH!!!

 Readability
 */

 // ARRAYS

 const fruits = ["Apple", "Blueberry", "Oranges"]; // [] is array
console.log(fruits.length); // 3 the total items in the array

fruits.push("Mango"); // Adding new item to the array (To the end)

console.log(fruits);

fruits.unshift("Grapes"); // Adding new item to the array (In the beginning)
console.log(fruits);

fruits.pop(); // Remove the last item in array
console.log(fruits);

fruits.shift(); // Remove the first item in the array
console.log(fruits);

const numbers = [2, 4, 99, 88, 54, 5];

numbers.sort();
console.log(numbers);


          // 0 1 2
let animal = "dog";
console.log(animal.length);


        //      0          1           2
const cars = ["BMW", "Volkswagen", "Toyota"];

console.log(cars.indexOf("Volkswagen")); // Gives you the index of Volkswagen



// Object

const user = { // Concrete
    name : "Kjetil",
    age : 44,
    job : "Student",
    wealth : 32341298013798989
}

console.log(user);

console.log(user.age);
console.log(user.name);
console.log(user.wealth);
console.log(user.age + " " + user.name);



const someText = "Hello my name is " + user.name; 
console.log("someText:", someText);

const someTextTwo = `Hello my name is ${user.name} and i am ${user.age} years old, i am loaded and own $ ${user.wealth} and i work as a ${user.job}`;
console.log(someTextTwo);

const books = [
    {
        title : "The Hobbit",
        author : "J.R.R Tolkien",
        pages : 320
    },
    {
        title : "The eye of the world",
        author : "Robert Jordan",
        pages : 814
    },
    {
        title : "The Bible",
        author : "Some guy that fooled the world",
        pages : 3000
    }
]

// console.log("My first book", books[0]);

const searchedBook = books.find(function (book) { // anonymous function
    return book.pages > 320;
});

console.log("Searched book:", searchedBook);


// function is a set of action or code run when w call this function name

function doorRing(withCamera) {
    console.log("I will go open the door the person is " + withCamera);
}

doorRing("Monde photo");


function logWord(theWord) {
    console.log(theWord);
}

logWord("Hesham");
logWord("Line");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);

console.log("sum: ", sum);