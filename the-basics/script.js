// Variables
// = is like assigning things
// in Java script you use camelCase
var myName = "Line";

console.log(myName); // Output: Line

// "" means string(Text)

let age = 31;

console.log(age);

// Const can´t be changes so we use uppercase for it
const MAKE = "BMW";
console.log(MAKE); // Output: BMW



//  Data Types

let greeting = "Hello, World!";
console.log(typeof greeting);

let isHappy = true; 
console.log(isHappy);
console.log(typeof isHappy); // Output: Boolean

let someVar;
console.log(typeof someVar); // Output: Undefined

let emptyValue = null;
console.log(typeof emptyValue); // Output: Null



// Object

let person = {
    firstName: "Hesham",
    lastName: "El Masry",
    age: 31
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Object Task

let car = {
    make: "Volvo",  // First is key and 2nd is output
    model: 242,
    doors: 2,
    modelYear: "1992",
    condition: "Used",
    price: 10000
};

// I have a Volvo 242 it is from 1992
// it is used and price is 10000

console.log(car["make"]); // Output: Volvo

console.log(car);
console.log(car.make); // Output: Volvo
console.log("I have a " 
    + car.make + " it is from " 
    + car.modelYear + " it is " 
    + car.condition + " and price is " 
    + car.price + ""); 
    // Output: if you change stuff in the object it will change in log too
console.log(`I have a ${car.make} it is from ${car.modelYear} ${car.model} it is ${car.condition} and price is ${car.price}`);





// Array

let colors = ["Red", "Green", "Blue"];


// first in array is not 1, but 0
let random = [
    55656, // 0
    "Green", // 1
    { name: "Hesh, age: 31"}, // 2
    ["boy", "Girl", "Whatever"] // 3
];

console.log(random[0]); // first item in the array
console.log(random[1]); // Second item in the array




// Type conversion

let year = "1992"; // String, because it is in a ""
console.log(year);

// From string(text) to number

let convertedYear = parseInt(year);
console.log(convertedYear);

// From number to string(text)

let num = 123;
console.log(num)
console.log(num.toString());

let convertedNumber = num.toString();

console.log(convertedNumber);


//Task 1

var city = "Toronto";
console.log(city);

let old = 44;
console.log(old);

const BIRTHYEAR = "1980";
console.log(BIRTHYEAR);

// Task 2

let greetingTwo = "Welcome and Happy new year";
console.log(greetingTwo);
console.log(typeof greetingTwo);

let quantity = -5;
console.log(quantity);
console.log(typeof quantity);

let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

let thisIsUndefined;
console.log(typeof thisIsUndefined);

let emptyValueTwo = null;
console.log(emptyValueTwo);
console.log(typeof emptyValueTwo);



// Task 3

let numString = "25";
console.log(numString)

let numTwo = parseInt(numString);
console.log(numTwo);

let num2 = 50;
console.log(num2);

let numString2 = num2.toString();
console.log(numString2)

let add = numTwo + num2;
console.log(add);

let add2 = numString + numString2;
console.log(add2)