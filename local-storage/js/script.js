// console.log("local storage");

// import {greetUser} from "./utils.js"; // Named export

// import greetUser from "./utils.js"; // Default export 
        // comes from a different script where "export default export" i used

// export {greetUser, signUpUser}; // instead of individual export of each function

//  ./utils.js is relative



// Local Storage (Temporary storage) // Access to date one all html pages
// Session storage // Only on one html page

const myVariable = "Some text";
window.localStorage.setItem("variableOne", myVariable); 
// Window select the whole browser not the dom

window.localStorage.setItem("Name", "Thomas OS");

// Save objects or Arrays

let car = {
    make: "Troll",
    model: 1958,
    price: 2000
}

window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav", "Troll");

// Task 
// Use local storage
// Create three items there
// first is a variable string
// Second is a object
// Third is an array

let puddingFlavour = "Chocolate";

window.localStorage.setItem("puddingFlavour", puddingFlavour);

let coffee = {
    origin: "South Africa",
    intensity: "Medium 7"
}

window.localStorage.setItem("Coffee", JSON.stringify(coffee));

let shoppingList = ["Coffee", "Jam", "Milk"];

window.localStorage.setItem("Shopping List", JSON.stringify(shoppingList));

//
//
// store the data in the localstorage
//
// adn then get the items from the local storage
//
// please use JSON.stringify and JSON.parse
