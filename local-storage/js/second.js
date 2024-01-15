const myName = window.localStorage.getItem("Name");
console.log(myName);

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// parse

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);


// Task
const myFlavour = window.localStorage.getItem("puddingFlavour")
console.log(myFlavour);

const myCoffee = window.localStorage.getItem("Coffee");

const myCoffeeParsed = JSON.parse(myCoffee);
console.log(myCoffeeParsed);

const myShoppingList = window.localStorage.getItem("Shopping List");

const myShoppingListParsed = JSON.parse(myShoppingList);
console.log(myShoppingListParsed);