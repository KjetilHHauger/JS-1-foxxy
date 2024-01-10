console.log("examples");

// 1. Variables

// Ecmascript 5

// ES5
// var name = "Anikken";

// name = "hesh";

// ES6

// let secondName = "Tom";

// secondName = "Alex";

// const thirdName = "Marius";

// can not change const like 
// thirdName = "Julie";

// 2. console.log -- console.dir console.info // Yellow // console.error

// 3, >= (greater or equal) <=(smaller or equal) = (Equal)
// True now we are using not strict equality


// "H" === "h" //false, is called strict equality
// "1" == 1 // True
// "1" === 1 // False

// 4. Conditions
// if() {}

// 5. Objects
/*
let car = {
    key     value
    color: "red" // String
    model: "bmw"
    year: "1992"
    VIN: 32424342 
}
*/

// console.log(car.color);
// console.log(car.["color"])

// 6. for loops (Like repeating)


// starting point // condition // increment
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 7. Array

let myBigBox = ["hesham", 22232, false, {name: "Layla"}];

console.log(myBigBox.length); // I will get how many items in the array

console.log(myBigBox);

console.log(myBigBox[0]);

console.log(myBigBox[3].name);

// How to get the last item of the array

const lastItemIndex = myBigBox.length - 1; // -2 to get second last item
console.log(lastItemIndex);

console.log(myBigBox[lastItemIndex]);

// 8. Looping over an array

for (let i = 0; i < myBigBox.length; i++) {
    console.log(myBigBox[i])
}

// 9. Concatenation

let theName = "Anniken";
let theSecondName = "Hesh";
let theThirdName = "Patrick";


let myParagraph = "Hello " + theName + " and hello " + theSecondName + " ,hello my friend " + theThirdName;

console.log("using quotes: myParagraph" ,myParagraph);

myParagraph =  `Hello ${theName} and hello ${theSecondName} , 
hello my friend ${theThirdName}`;

// 10. Function (often used for like on instagram)

function logWord(name) {
    if (name) {
        console.log("Hello " + name + " Sir");
    } else {
        console.log("Sorry ;(");
}
}

logWord("hesham"); // One time

logWord("Jonas"); // Second time

logWord();


