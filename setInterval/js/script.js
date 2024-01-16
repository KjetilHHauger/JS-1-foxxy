// setInterval

// Similar to the setTimeout but executes a function
// at a certain interval until it is cleared(Stop)

let count = 0;

const intervalId = setInterval(function(){
    console.log("Hello count"); 
    count++; // Increment
    if(count === 5){
        clearInterval(intervalId);
    }
}, 1000);




const container = document.querySelector(".container");

let liCount = 0

const intervalLi = setInterval(function(){
    liCount++;
    container.innerHTML += 
        `<li>Poli${liCount}</li>`
    if(liCount === 10)
        clearInterval(intervalLi); // Clears or stops the count

}, 2000);

