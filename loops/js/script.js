console.log("Loops");

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Looping or iteration

for(let i = 1; i <= 5; i++){
    console.log(i)
}

// i = 1;    i is now 1
// i <= 5;   i is less then 5 (Condition) // True
// i++       i = i + 1

// Loop is for repeating!!

// for(initialization; condition; increment;) {
//
// }

for(let count = 5; count >= 0; count--) {
    console.log("Countdown:", count);
}


//               0       1       2           3
const cars = ["Tesla", "BMW", "Volvo", "Volkswagen"];

console.log(cars.length);

const totalNumberOfCars = cars.length;

for(let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i]);
}

//                 0        1         2         3
const fruits = ["Apple", "Banana", "Cherry", "Orange"];
    console.log(fruits);

const fruitsTotal = fruits.length
    console.log(fruitsTotal);

for(let f = 0; f < fruitsTotal; f++) {
    console.log(fruits[f]);
}

// How to get the last item in the array

// const lastItemInTheArray = fruits.length - 1;
console.log(fruits.length - 1);
console.log(fruits[fruits.length - 1]);