// addEventlistener // onclick

// 1. Select the body

const body = document.querySelector("body");
console.log(body);

const title = document.querySelector("h1");

// 2. Select the dark mode btn

const darkModeBtn = document.querySelector(".mode-btn");
console.log(darkModeBtn);

function init() {
    // it will get for me the dark mode status
    // it will change for med the body background color
    const darkMode = window.localStorage.getItem("darkMode");
    console.log("Current mode", darkMode);
    if(darkMode) {
        body.style.backgroundColor = "#0A0A0A";
        title.style.color = "white";
    } else {
        body.style.backgroundColor = "#FFFFFF";
        title.style.color = "navy";
    }
}
let isDarkMode = false;
console.log("isDarkMode Before", isDarkMode)

function toggleMode() {
    if(isDarkMode) {
        body.style.backgroundColor = "#0A0A0A";
        title.style.color = "white";
        console.log("isDarkMode", isDarkMode);
    } else {
        isDarkMode = !isDarkMode;
        body.style.backgroundColor = "#FFFFFF";
        title.style.color = "navy";
        console.log("isDarkMode here: ", isDarkMode);
    }
}

darkModeBtn.addEventListener("click", toggleMode);

