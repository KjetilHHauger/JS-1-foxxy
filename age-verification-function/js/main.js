const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector("#enter-BTN");

enterBTN.addEventListener("click", function () {
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);
    if (isAgeOk) {
        document.location.href = "welcome.html"
    } else {
        // TODO Handle error - please show an error message
        alert("You can not enter the website. Too Young")
    }
});

function isOldEnough (ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}