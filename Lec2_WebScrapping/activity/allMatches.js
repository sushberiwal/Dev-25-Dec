const request = require("request");
const cheerio = require("cheerio");


function getAllMatches(link){
    request(link , cb);
}

function cb(error , response , data){
    if(error == null){
        // data successfully aa chuka hai
        parseData(data);
    }
    else if(response.statusCode == 404){
        console.log("Page not found !!");
    }
    else{
        console.log(error);
    }
}

function parseData(html){
    console.log(html);
}

//nodejs
module.exports = getAllMatches;