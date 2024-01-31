//#region functions, there are 4 types

// function doSomething() {
//     console.log("I just do something -> void");
// }
// Void
// doSomething();

// function doSomethingWithData(someData) {
//     console.log("I just do something with someData here it is " + someData);
// }
// Void with some parameters
// doSomethingWithData("some sweet string");

// function doSomethingReturnsAString() {
    
//     return "This is easy ";
// }

// let result = doSomethingReturnsAString() + doSomethingReturnsAString();
//     console.log(result);

// function doSomethingReturnsASomething(someData) {

//     return "This is easy " + someData;
// }

// let result2 = doSomethingReturnsASomething("Ikke sant?");

// console.log(result2);

//#region High Order Functions(HOF) and Callbacks
function doSomething(someParam) {
    console.log("I do something");
    console.log("I do something");


    someParam()




    console.log("I do something");
    console.log("I do something");
}

doSomething(function(){
    console.log("I am callback")
    console.log("I am callback")
    console.log("I am callback")
    console.log("I am callback")
})

doSomething(function(){
    console.log("I am also a callback")
})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function count(array, logic) {
    let counter = 0;
    for (let number of array) {
        let shouldInclude = logic(number);

        if (shouldInclude) {
            counter++
        }
    }
    return counter;
}

let resultGreaterThan5 = count(numbers, function (number) {
    if(number > 5) {
        return true
    } else {
        false;
    }
})

console.log(resultGreaterThan5);

let resultLesserThan5 = count(numbers, function (number) {
    if(number < 5) {
        return true
    } else {
        false;
    }
})

console.log(resultLesserThan5);

fetch("https://catfact.ninja/facts", function (response) {




    console.log(response);
});