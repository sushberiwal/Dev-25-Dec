let fs = require("fs");
let obj = {
    name:"steve",
    movies:["the winter soldier"]
}


fs.writeFileSync("./data.json" , JSON.stringify(obj));





