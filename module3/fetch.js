//fetch api
//Fetch API is a built-in JavaScript method used to send HTTP requests (like GET, POST, PUT, DELETE) to a server and receive data.
//  It returns a Promise, so you can handle the response using .then() or async/await.

// fetch("https://randomuser.me/api/?results=5000")
//     .then(function(rawdata){
//         return rawdata.json();
//         console.log(rawdata);
//     })

//     .then(function(data){
//         console.log(data.results[0].name.first);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

    //optimised
console.log("Optimised way");
fetch("https://randomuser.me/api/?results=50")
    .then((raw) => raw.json())
    .then((data) => console.log(data.results));