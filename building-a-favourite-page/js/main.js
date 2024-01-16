import productsData from "./data/products.js";

// 1. Select the products-container

const productsContainer = document.querySelector(".products-container");

// 2. Fill the container of the products with products

for(let i = 0; i < productsData.length; i++) {
    console.log(productsData[i]);
    productsContainer.innerHTML += `
    <div class="product">
                <img src="https://picsum.photos/200" alt="Random Photo">
                <h3>${productsData[i].name}</h3>
                <h4>${productsData[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                </span>
            </div>
    `;
}

// 3. Check if any of the fav btns clicked
const favourites = document.querySelectorAll(".heart");
console.log("Fav", favourites);

// loop on the dom elements i selected (hearts)
// All the elements with the class heart
for(let x = 0; x < favourites.length; x++) {
    console.log(favourites[x]);
    favourites[x].addEventListener("click", function (){
        console.log("Clicked me", favourites[x]);
        this.classList.toggle("active-heart")
    })
}

// 4. I want to make THIS heart to be red
// TODO I want to move my clicking event of the fav btn 
// TODO to its own function instead of anonymous function

