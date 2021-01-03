// chaining => hell se bacha dega

// Initial state of promise is Pending
// Pending Promise is either resolved or rejected
// we always get a pending promise when a promisifed function is called
// then can only be called on pending promise and cb sent in then function is known as success callback
// catch can only be called on pending promise and cb semt in catch function is known as failure callback


// then also gives us a pending promise

let fs = require("fs");


let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(data){
    console.log(data+"");
})


// console.log("thenkapromise" ,thenKaPromise);