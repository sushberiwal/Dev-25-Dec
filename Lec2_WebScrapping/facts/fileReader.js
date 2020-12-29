// main location pe gaya => Dev 25 dec cmd pe
// npm init -y => package.json file bnti hai
// npm install cheerio
// new file .gitignore
// node_modules
const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");
let ch = cheerio.load(htmlKaData);

//on the basis of elements name
// <h1>Heading 1</h1>
let h1KaData = ch("h1").text();
// console.log(h1KaData);
let pKaData = ch("p").text();
// console.log(pKaData);


// on the basis of classes
let outerPKaData = ch(".outerp").text();
// console.log(outerPKaData);
// let outerPKaData = ch(".outerp.main").text();
// console.log(outerPKaData);

// let innerPKaData = ch("ul p").text();
// console.log(innerPKaData);

// ids
let innerPKaData = ch("#inner").text();
console.log(innerPKaData);




