const request = require("request");
const fs = require("fs");
//hof

let link = "https://www.pepcoding.com";

request( link , cb);


function cb(error , response , data){
    fs.writeFileSync("./data.html" , data);
}