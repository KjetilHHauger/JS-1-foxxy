// data
// let todos = [];

// let todo = fetch('https://jsonplaceholder.typicode.com/todos') // get request
// .then(function (httpResponse) {
//     console.log("Todo: ", httpResponse);
//     // extract the data
//     console.log(httpResponse);
// })
// .then(function(todoResult) {
//     todo = todoResult;
// });

// fetch('https://jsonplaceholder.typicode.com/todos', 

// {
// 	  method: 'POST',
// 	  body: JSON.stringify({
// 	    title: 'foo',
// 	    body: 'bar',
// 	    userId: 1,
// 	  }),
// 	  headers: {
// 	    'Content-type': 'application/json; charset=UTF-8',
// 	  },
// 	})
// 	  .then((httpResponse) => httpResponse.json())
// 	  .then((json) => console.log(json));

// console.log("other stuff");




// let res = []

// let resources = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(response) {
//     console.log("Resources: ", response)
//     return response.json()
// })
// .then(function(resourceRes) {
//     resources = resourceRes
// })

// Show it to the user

// ----> go fetch I promise to forward to .then

// ----> await going to fetch
// ----> Forward to the next line


// Method one
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (httpResponse) {
        return httpResponse.json();
    })
    .then((data) => console.log(data));

// Method two

    async function getTodos() {
        let httpResponse = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await httpResponse.json();
        console.log(data);
    }

    getTodos();

    fetch('https://jsonplaceholder.typicode.com/posts/2', {
	  method: 'DELETE'
	})
	  .then((httpResponse) => httpResponse.json())
	  .then((json) => console.log(json));

     