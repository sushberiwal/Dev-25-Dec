const request = require("request");
const cheerio = require("cheerio");
const getMatch = require("./match");


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
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover="Scorecard"]');
    // [ <a   /> , <a    /> , <a    /> , <a    /> , <a    /> , <a    /> , <a    /> , <a    /> ];
    // console.log(allATags.length);
    for(let i=0 ; i<allATags.length ; i++){
        let link = ch(allATags[i]).attr("href");
        let completeLink = `https://www.espncricinfo.com${link}`;
        // console.log(completeLink);
        getMatch(completeLink);
    }
    //?????????????
}

//nodejs
module.exports = getAllMatches;