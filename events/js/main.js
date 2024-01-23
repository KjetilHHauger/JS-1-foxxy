

// someFunction (); Cant fire function before the variable function
// Function expressions
// Function assigned to a variable
const someFunction = function () {
    console.log("Hello i am Kjetil");
}


// Normal function of JS, can fire before function
saySomethingFunction ();

function saySomethingFunction () {
    console.log("Hello Truls");
}

// Q2

// addEventListener
// Select the . button class

const button = document.querySelector(".btn");
console.log(button);

// Way 1

const handleClickTwo = function () {
    console.log("You handleClickTwo");
}

button.addEventListener("click", handleClickTwo);

button.addEventListener("click", function(){
    console.log("You clicked me");
});

button.addEventListener("click", handleClick);

function handleClick (){
    console.log("You handleClicked me");
}

// Way 2 Mouse click

button.onclick = function () {
    console.log("Omg you clicked me using onclick ;S");
}

button.onclick = function (event) {
    console.log(event.target.value);
    console.log(this.value);
}

// Q3 Key Press

// onKeyDown // The event will trigger when you press on
// onKeyUp // The even will trigger when you release
// The onKeyPress

// onKeyDown, onKeyUp and onKeyPress NO ONE IS USING THEM ANYMORE

const myFirstNameInput = document.querySelector("#firstName");
console.log("myFirstNameInput", myFirstNameInput);

const handleKeyPress = function (event) {
    console.log("a key pressed");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);

// Q4 Hover effect (detecting hover)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function () {
    theHoverBtn.style.backgroundColor = "green";
}

const handleMouseOut = function () {
    theHoverBtn.style.backgroundColor = "";
}


theHoverBtn.addEventListener("mouseout", handleMouseOut);
theHoverBtn.addEventListener("mouseover", handleMouseOver);

