const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");


request("https://www.espncricinfo.com/series/ipl-2020-21-1210595" , cb);
function cb(error ,response , data){
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
    // console.log(html);
    let ch = cheerio.load(html);
    let link = ch(".widget-items.cta-link a").attr("href");
    // let completeLink = "https://www.espncricinfo.com"+link;
    let completeLink = `https://www.espncricinfo.com${link}`;
    console.log(completeLink);
    getAllMatches(completeLink);
}
