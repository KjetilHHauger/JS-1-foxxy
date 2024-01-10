// let news = [
//     {
//         headline: "Watch Hesh landing on the moon",
//         summary: "He landed with his super jet"
//     },
//     {
//         headline: "Watch Lorem Ipsum",
//         summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos at sed nostrum a soluta, voluptatum fugit id accusamus in!"
//     },
//     {
//         headline: "Watch the gru",
//         summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos at sed nostrum a soluta, voluptatum fugit id accusamus in!"
//     },
// ];

// console.log(news);

// let newsContainer = document.querySelector(".news");
//     console.log("newsContainer");
// const totalNumberOfNews = news.length;

// let html = "";
// for (let i = 0; i < totalNumberOfNews; i++) {
//     console.log(news[i].headline);
    
//     newsContainer.innerHTML += ` 
//             <div>
//                 <h2>
//                     ${news[i].headline}
//                 </h2>     
//                 <p>
//                     ${news[i].summary}
//                 </p>       
//             </div>
//     `;
// }


// let ads = [
//     {
//         company: "Noroff",
//         text: "Join the future"
//     },
//     {
//         company: "Statoil",
//         text: "Black oil"
//     },
//     {
//         company: "Rema 100",
//         text: "FOOD"
//     },
// ];

// let adsContainer = document.querySelector(".ads");
// const totalAds = ads.length;


// let adsHtml = "";

// for (let i = 0; i < totalAds; i++) {
    
//     adsContainer.innerHTML += ` 
//             <div>
//                 <h2>
//                     ${ads[i].company}
//                 </h2>     
//                 <p>
//                     ${ads[i].text}
//                 </p>       
//             </div>
//     `;
//     console.log(newsContainer);
// }


const cats = [
    {
        name: "Mocho",
        age: 2
    },
    {
        name: "Titty",
        age: 3
    },
    {
        name: "Dodo",
        age: 5
    }
];

function getName(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i].name);
    
// }

getName(cats);

const dogs = [
    {
        name: "Jackson",
        age: 2
    },
    {
        name: "Polo",
        age: 3
    },
    {
        name: "Mailo",
        age: 5
    }
];

getName(dogs);

function createShoppingList(shoppingList) {

    let myShoppingListItems = "";

    for (let i = 0; i < shoppingList.length; i++) {
        myShoppingListItems += `
            <div>
                <h2>
                 ${shoppingList[i].name}
                </h2>
            </div>
        `
    }
    return myShoppingListItems
}

let lineShoppingList = [
    {
        name: "orange juice",
        price: 200
    },
    {
        name: "chocolate",
        price: 100
    }
]

const lineShoppingListContainer = document.querySelector(".line-shopping-list");
console.log(lineShoppingListContainer);

lineShoppingListContainer.innerHTML = createShoppingList(lineShoppingList);