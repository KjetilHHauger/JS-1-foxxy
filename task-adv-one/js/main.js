

function find(arr, value) { // arr can be called what every you want. 
                            // just the name of the argument
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

const myArray = [1, 2, 3, 18, 1000];
const valueToSearchFor = 2;
let isNumber = find(myArray, valueToSearchFor);

console.log("isNumber: ", isNumber);