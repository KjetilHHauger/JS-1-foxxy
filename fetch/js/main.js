// data
let todos = [];

let todo = fetch('https://jsonplaceholder.typicode.com/users')
.then(function (httpResponse) {
    console.log("Todo: ", httpResponse);
    // extract the data
    return httpResponse.json()
})
.then(function(todoResult) {
    todo = todoResult;
});


console.log("other stuff");

// Show it to the user

let res = []

let resources = fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
    console.log("Resources: ", response)
    return response.json()
})
.then(function(resourceRes) {
    resources = resourceRes
})