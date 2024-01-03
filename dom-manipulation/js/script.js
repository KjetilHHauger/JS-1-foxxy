// 1. Select the heading h2

// querySelector
// querySelectorAll
// getElementById


const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with an id #list using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li

const listItem = document.querySelector("li");
console.log(listItem);

// 6. Select multiple li´s

const listItems = document.querySelectorAll("li");
console.log(listItems);

// 7. Select the h1 and change the color to be red

const heading1 = document.querySelector("h1");
console.log("Before i do change");
console.dir(heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

// Task, Pleas change the background color of the heading1 variable

heading1.style.backgroundColor =  "lightGray";

// Select the div and add a class .container to it

const myDiv = document.querySelector("div");
console.dir(myDiv);

myDiv.classList.add("container");

// Change the heading text

heading1.innerText = "Hei Ingrid og Hei Line";

heading1.innerHtml = `<span class="green">Hei Ingrid og Hei Line</span>`;

//                        0         1        2         3
const myArrayOfNames = ["Hesh", "Kjetil", "Jonas", "Johnny", "Marius"];

// console.log(myArrayOfNames[0]);
// console.log(myArrayOfNames[2]);
// console.log(myArrayOfNames[1]);
// console.log(myArrayOfNames[3]);

// Loop

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1

console.log(myArrayOfNames[0]);

// Count to 100

for(let i = 1; i <= 100; i++){
    console.log(i);
}

// Arithmetic Operators

// = (add results that is after into the variable(before))(Assignment) 
// ++

// Addition(+)

// 10 + 5 = 15

let sum = 10 + 5;
console.log("Addition:", sum);

// Subtraction(-) 

let difference = 10 - 5;
console.log("Subtraction:", difference);

// Multiplication

// 10 * 5 = 50

let product = 10 * 5;
console.log("Multiplication:", product);

// Division

// 10 / 5 = 2

let result = 10 / 5;
console.log("Division:", result);

// Modulus

let remainder = 10 % 4;
console.log("Remainder:", remainder);

// Simple operators

// Simple assignment

let a = 5; // a is 5

// Addition assignment (+=)

let b = 10;

b += 5; // b is now 15, shorthand for b = b + 5;

// Subtraction assignment

let c = 15;

c -= 5; // c is now 10, Shorthand for c = c - 5;

// Comparison operators

// Equal (==)

let isEqual = (5 == "5"); // True, does not look at datatype
console.log("isEqual:", isEqual);

// Strict equal (===)

let isStrictEqual = (5 === "5"); // False, looks at datatype
console.log("isStrictEqual:", isStrictEqual);

// Not equal (!=)

// 5 != 6 // True

let isNotEqual = (5 != "6"); // True, does not look at datatype. !== for strict
console.log("isNotEqual", isNotEqual);

// Greater then (>)

// 10 > 5 // True

let isGreaterThen = (10 > 5); // True
console.log("isGreaterThen:", isGreaterThen);

// Lesser then (<)

// AND // OR
// &&  // || (option+7)

let andResult = (5 > 3 && 10 > 5); // True, cause both are true
console.log("andResult:", andResult);

let orResult = (5 > 10 || 10 > 5); // True, cause one of them is true
console.log("orResult:", orResult);


// NOT (!)

!(5 > 10); // True

