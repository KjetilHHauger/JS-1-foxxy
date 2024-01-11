console.log("Function");

// I want to create a function in my calculator app
// to sum three numbers

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let resultOfSummation = addThreeNumbers(10, 20, 30);

console.log("Result: " ,resultOfSummation);

function multiplyThreeNumbers(multi1, multi2, multi3) {
    return multi1 * multi2 * multi3;
}

let resultOfMulti = multiplyThreeNumbers(3, 5, 10);

console.log("Result: " ,resultOfMulti);


// 1. Please select the heading and when i click on the btn "change heading"
// change it to be "it`s a god dag"

let heading = document.querySelector("h1");
// console.log("Heading" ,heading);

let button = document.querySelector("button");
// console.log("button: " ,button);

let buttonColours = document.querySelector(".colours");
// console.log("buttonColours: " ,buttonColours);

let body = document.querySelector("body");
// console.log("body" ,body);



function changeHeading() {
    heading.innerHTML = "Det er en god dag idag";
}

button.onclick = changeHeading;

// 2. When I click on the btn "Change colours" I would like to change the
// background color of the body to be purple
// and the heading h1 to be black

function changeColour() {
    body.style.backgroundColor = "purple";
    heading.style.color = "black";
}

buttonColours.onclick = changeColour;


// Functions inside objects

const pet = {
    type: "cat",
    name: "Titty",
    age: 10,
    isFriendly: "false",
    mewMew: function() {
        heading.innerHTML = "The sound of the cat";
        // alert("The sound of the cat");
    }
}

console.log("Type: " ,pet.type);
console.log("Friendly: " ,pet.isFriendly);

// pet.mewMew(); // () Runs the function and console.log it

// Create a btn which is called Meaw Meaw
// when you click on this btn i want to run the function
// in the object pet which is : meawMeaw

const buttonMew = document.querySelector(".mew");

buttonMew.onclick = pet.mewMew;