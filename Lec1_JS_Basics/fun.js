// function body
function sayHi(name , fn){
    fn();
    console.log(name + " says Hiii !!");
    return 10;
}


function fun(){
    console.log("I am fun");
}


// function call
// sayHi();
// let val = sayHi();
// console.log( val );


let val = sayHi("Steve" , fun);
console.log(val);


// in javascript , functions are variables
// variables can be passed as a parameter
// so , functions can also be passed as a paramter






