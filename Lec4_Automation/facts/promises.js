let fs = require("fs");


// readFileSync , readFile 


// B               // A
let f1KaPromise = fs.promises.readFile("./f1.txt");
console.log(f1KaPromise);

// scb => success callback
f1KaPromise.then(function(data){
    console.log("Inside scb");
    console.log(data+"");
});


// fcb => failed callback
f1KaPromise.catch(function(error){
    console.log("Inside fcb");
    console.log(error);
});


