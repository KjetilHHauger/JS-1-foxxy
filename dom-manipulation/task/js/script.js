const heading = document.querySelector("h1");
console.log(heading);
heading.style.color = "blue";
heading.style.fontSize = "2rem";
heading.innerText = "Welcome to JavaScript Class";

const myBtn = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

myBtn.addEventListener("click", function () {
    let someRandomNumber = getRandomInt(220);

    list.innerHTML += `<li>New Item ${someRandomNumber}</li>`
});
