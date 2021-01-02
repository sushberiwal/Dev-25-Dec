const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function getMatch(link){
    request(link,cb);
}

function cb(error , response , data){
    parseData(data);
}

function parseData(data){ 
    // console.log(data);
    let ch = cheerio.load(data);
    let bothInnings = ch('.match-scorecard-page .Collapsible');
    //[<div class="Collapsible"></div> , <div class="Collapsible"></div>]
    // console.log(bothInnings);
    // fs.writeFileSync("./bothInnings.html" , bothInnings+"");
    for(let i=0 ; i<bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        // console.log(teamName);
        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        //[ <tr></tr> , <tr> </tr> , <tr> </tr> , <tr> </tr> , <tr> </tr> , <tr> </tr> , <tr class="extras"> </tr>];
        for(let j=0 ; j <allTrs.length-1 ; j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length > 1){
                // valid tds
                let batsman = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate = ch(allTds[7]).text().trim();
                // console.log(`Batsman = ${batsman} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`)
                processDetails(teamName , batsman , runs , balls , fours , sixes , strikeRate);
            }
        }
        // console.log("########################################");
    }
}

function checkTeamFolder(teamName){
    // teamPath = "./IPL/Mumbai Indians";
    let teamPath = `./IPL/${teamName}`;
    return fs.existsSync(teamPath);
}
function checkBatsmanFile(teamName , batsman){
    // batsmanPath = "./IPL/Mumbai Indians/HPandya.json";
    let batsmanPath = `./IPL/${teamName}/${batsman}.json`;
    return fs.existsSync(batsmanPath);
}
function updateBatsmanFile(teamName , batsman , runs , balls , fours , sixes , strikeRate){
    let batsmanPath = `./IPL/${teamName}/${batsman}.json`;
    let batsmanFile = fs.readFileSync(batsmanPath);
    batsmanFile = JSON.parse(batsmanFile);
    let inning = {
        Runs : runs,
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes,
        SR : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync(batsmanPath , JSON.stringify(batsmanFile));
} 
function createBatsmanFile(teamName , batsman , runs , balls , fours , sixes , strikeRate){
    let batsmanPath = `./IPL/${teamName}/${batsman}.json`;
    let batsmanFile = [];
    let inning = {
        Runs : runs,
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes,
        SR : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync(batsmanPath , JSON.stringify(batsmanFile));
} 
function createTeamFolder(teamName){
    let teamPath = `./IPL/${teamName}`;
    fs.mkdirSync(teamPath);
}


function processDetails(teamName , batsman , runs , balls , fours , sixes , strikeRate){
    let isTeamFolder = checkTeamFolder(teamName);
    if(isTeamFolder){
        let isBatsman = checkBatsmanFile(teamName , batsman);
        if(isBatsman){
            updateBatsmanFile(teamName , batsman , runs , balls , fours , sixes , strikeRate);
        }
        else{
            createBatsmanFile(teamName , batsman , runs , balls , fours , sixes , strikeRate);
        }
    }
    else{
        createTeamFolder(teamName);
        createBatsmanFile(teamName , batsman , runs , balls , fours , sixes , strikeRate);
    }
}





module.exports = getMatch;
