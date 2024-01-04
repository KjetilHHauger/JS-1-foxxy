console.log("here");

// 1. If and else statements

let temp = 20;

if(temp >= 30) {
    console.log("It is very hot!!!");
} else if(temp >= 20) {
    console.log("The weather is nice");
} else {
    console.log("The weather is very cold");
}

// At school my students had an exam. Some students
// got score high and low. I want to write an
// if else statement to check if the score is high
// or low
// if the score is less than 50 then the student
// fails print fails
// else the score is more than or equal to 50 then the student
// passed print pass

// please use the variable score to your condition

let score = "60";

if(score >= 50) {
    console.log("Passed"); 
} else {
    console.log("Failed");
}

// A means very good
// B means good
// C means average
// D means you need to start to think to do something else
// otherwise you failed

let grade = "A";

if (grade === "A") {
    console.log("Very good," + "\nYou got a score of: " + grade);
} else if (grade === "B") {
    console.log("Good!," + "\nYou got a score of: " + grade);
} else if (grade === "C") {
    console.log("Average," + "\nYou got a score of: " + grade);
} else if (grade === "D") {
    console.log("You need to start to think to do something else," + "\nYou got a score of: " + grade);
} else {
    console.log("You failed badly!")
}


// 2. Switch case

let color = "yellow";

switch(color) {
    case "red":
        console.log("Stop !!!");
        break; // go outside the condition
    case "yellow":
        console.log("Get Ready !!!");
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("No traffic lights go murder people!");
}

// 3. Scope

var name = "hesham";  // Global scope

let myName = "hesham"; // function scope

var greeting = "Hello";

if(true) {
    var greeting = "Hi"; // re declared it, function on a global. So all greeting.
    console.log(greeting); // Hi
}

console.log(greeting); // Hi

let message = "Hello"; 

if(true) {
    let message = "Hi"; // let function just inside the bracket
    console.log(message); // Hi
    message = "Hello man";
    console.log(message);
}

console.log(message); // Hello

// const is for constant. Once you declare it you can re declare it.

const GRADE = "A";

// GRADE = "B";
console.log(GRADE);

// const you define it once in your application
// let you define it and then you can change the value of it
const MY_NAME = "Hesh";

if(true) {
    console.log(MY_NAME);
}

console.log(MY_NAME);

let make = "Ford"; 

if(true) {
    let ford = true;
    console.log(Ford);
} else {
    console.log("Troll");
}