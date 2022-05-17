
const express = require("express");
const app = express();


// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use("/api/data",require("./api/data"))

app.get("/data", async (req, res) => {

res.send('https://jsonplaceholder.typicode.com/photos')
})



app.listen(5000,()=>{
    console.log("server run on port 5000");
})

module.exports = app
// import fetch from 'node-fetch';


// console.log("Fetch here ");


// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => console.log(json))


//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const body = await response.text();

// console.log(body);