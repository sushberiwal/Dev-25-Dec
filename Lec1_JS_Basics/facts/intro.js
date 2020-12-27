// top to down and left to right

// console.log("Hello World !!");

// data types => Number , Boolean , String , undefined , null , object

// ES6 syntax => ECMA SCRIPT 6 => specification which define the language how it should be written 

// variables => let , const

//let => block scoped , reassignment 
let a = 25;
a = 30;

// console.log(a);

if(true){
    let b = 30;
    //b can only be accessed within this block
}


// console.log(a);
// console.log(b);
let b = "hey i am string";
let c = true;
let d = undefined;


// const keyword => constant => block scoped => reassignment is not possible
const pi = 3.14;
// pi = 50; this is not allowwed , 
// console.log(pi);


// object are key value pairs
// keys => unique and values => need not to be unique
let obj = {
    "name":"Steve Rogers",
    "skills":"Martial Arts",
    "movies":"Winter Soldier",
    "BESTFRIEND":"BUCKY BARNES"
}

// object ko access

// dot notation => literal check

let name = obj.name;
// console.log(name);
console.log(obj.skills);
console.log(obj.movies);


let key = "skills";
console.log(  obj.key  );

// bracket notation
console.log(  obj[key]   );
let bestie = "BEST FRIEND";
console.log(   obj.BESTFRIEND);



// arrays
let movies = [ "winter soldier" , "iron man 1" , "iron man 2" , "age of ultron" , 12123 , 3535 , 235235 , 235 , {
    "name":"Steve Rogers",
    "skills":"Martial Arts",
    "movies":"Winter Soldier",
    "BESTFRIEND":"BUCKY BARNES"
} , true , false , {name:"kuch jbhi" , values: [ "maritial arts" , "taekwondo" , "boxing"]} , [ 1 , 2 , 3 , 4 , 5  ]  ];


// push ,  pop , shift ,  unshift , slice , splice  , map , filter
console.log(  movies[11].values[1]   );

// == and ===

// == only value check hoti hai data type se mtlb nhi h
console.log(   12 == "12" );


// === value and data type both are checked !!
console.log(12 === '12');
















