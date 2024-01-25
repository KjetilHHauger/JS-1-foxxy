// function myFunction() {
//     alert("hello you released a key");
// }

const firstNameInput = document.querySelector("#first-name");
const formSignupBTN = document.querySelector("#sign-up-BTN");
const firstNameErrorMessage = document.querySelector("#first-name-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");


// 1. I want to trigger an onkeyup event when o write something
// in the input of first name

firstNameInput.onkeyup = function (event){
    let firstNameInputValue = event.target.value
    console.log("firstNameInputValue", firstNameInputValue);
    console.log(firstNameInputValue.length);
    
    // Condition - if the totalNumbersOfCharsFirstName > 5
    // Then the formSignupBTN disabled wil be false

    // Solution 1

     if(firstNameInputValue.length >= 5){
        formSignupBTN.disabled = false;
        firstNameErrorMessage.innerHTML = "Hey your name is perfect"; 
        firstNameErrorMessage.classList = "success";
     } else {
        formSignupBTN.disabled = true;
        firstNameErrorMessage.innerHTML = "Hey your name is NOT perfect";
        firstNameErrorMessage.classList = "error"; 
     }

    // Solution 2

    // firstNameInputValue.length >= 5 ? formSignupBTN.disabled = false : formSignupBTN.disabled = true;


    // Solution 3

    // formSignupBTN.disabled = firstNameInputValue.length <= 5;

}

passwordInput.onkeyup = function (event){
    let passwordValue = event.target.value;
    console.log("passwordValue: ", passwordValue);

    // switch case // Check on total number of chars to show specific message

    let totalNumbersOfCharsInPassword = passwordValue.length;
    console.log(totalNumbersOfCharsInPassword);

    if((passwordValue === "123456")){
        passwordErrorMessage.innerHTML = "😭 You need to think about all your passwords";
    } else if (totalNumbersOfCharsInPassword <= 3) {
        passwordErrorMessage.innerHTML = "🍻 Your password is weak like budweiser";
    } else if (totalNumbersOfCharsInPassword <= 5) {
        passwordErrorMessage.innerHTML = "💪 Your password is strong like me";
    } else if (totalNumbersOfCharsInPassword <= 8) {
        passwordErrorMessage.innerHTML = "🎉 Amazing password";
    } else {
        passwordErrorMessage.innerHTML = "🏄 Chill out dude, too damn long";
    }
}
