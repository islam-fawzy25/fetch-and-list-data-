

import fetch from 'node-fetch';


console.log("Fetch here ");


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const body = await response.text();

console.log(body);