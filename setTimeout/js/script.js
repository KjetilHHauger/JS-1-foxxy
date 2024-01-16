// setTimeout
// it is a method (Function)
// It is used to execute a function after a specific period of time

// 1. 

// setTimeout(function(){
//     console.log("Sup Thomas");
// }, 5000); // 5000 ms is 5 sec. 1000ms is 1 sec

// // Same function as above
// // setTimeout(logHello, 5000); 

// function logHello() {
//     console.log("Hello Thomas");
// }

// logHello();

// // 1. We select the loader element with class

// const loading = document.querySelector(".loader");
//     console.log("Loader element", loading);

// // 2. Use the setTimeout

// setTimeout(function(){
//     // 3. Change the inner HTML of the loading element
//     loading.innerHTML = "Finished loading 🎉";
// }, 5000);



const showHeader = document.querySelector(".ad");

setTimeout(function(){ // Anonymous function
    showHeader.style.display = "block" ;
}, 5000);