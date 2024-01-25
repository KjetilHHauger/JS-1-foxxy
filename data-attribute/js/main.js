const article = document.querySelector("#post");
const postDataBTN = document.querySelector("#postDataBTN");
const postImg = document.querySelector("img");
console.log("postimage", postImg);

postImg.addEventListener("click", function (){
    window.open(postImg.dataset.fullsize, "_self");
});

// Q1 I have a BTN in my HTML, when i click on this BTN
// I want to show an alert with the author and category

postDataBTN.addEventListener("click", function () {
    alert("Author: " + article.dataset.author 
    + "\n" + 
    "Category: " + article.dataset.category);
});