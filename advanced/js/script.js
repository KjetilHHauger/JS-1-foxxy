// Create and empty user object.
// Add a surname

let user = {}

user.name = "Jonas";
user.surname = "The Great";
console.log(user);

user.name = "Helene";
console.log(user);

delete user.name;
console.log(user);

// Q,2

// Create a function isEmpty(obj)
//that returns true if the object
// has no properties and false if
// there is at least on property

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

const isMyOjectEmpty = isEmpty(user);
console.log("isMyObjectEmpty: ", isMyOjectEmpty);

// Q3

// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array.
// 2) Write all positive and even numbers into another array.
// Display the results on the screen.

let num = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90]
num.sort(function(a,b){
    return a - b
});
console.log(num);
console.log(num[0]);
console.log(num[num.length -1]);
console.log(Math.max(...num));
console.log(Math.min(...num));

let even = [];
for(let i = 0; i < num.length; i++) {
        if(num[i] % 2 == 0){
            if(num[i] > 1){
                even.push(num[i]);
            }    
    }
}
console.log("Even array", even);