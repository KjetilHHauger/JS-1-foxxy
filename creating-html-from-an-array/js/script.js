const pets = [ // [] means its an array
    {
        type: null,
        color: "brown",
        age: 10,
        friendly: true,
    },
    {
        color: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        color: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
let petContainer = document.querySelector(".pet-container");
console.log("petContainer", petContainer);

// Create a html variable to hold our html in it when we use the loop
let html = "";

// Loop over the array
// change the innerHTML of the pet-container class div

const totalItemOfPets = pets.length;
    console.log(totalItemOfPets);

for(let i = 0; i < totalItemOfPets; i++) {
    console.log(pets[i].age)
    console.log(pets[i].color)
    html += `
            <div>
                <p style="color: ${pets[i].color}" >Color</p>
                <h1>Age: ${pets[i].age}</h1>
                <p>Friendly: ${pets[i].friendly ? "Yes it is friendly" : "No it is not friendly"}</p>
            </div>
    `;
    console.log(html);
}

petContainer.innerHTML = html;
