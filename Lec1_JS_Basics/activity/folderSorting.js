const fs = require("fs");

let files = fs.readdirSync("./testFolder");

for(let i=0 ; i<files.length ; i++){
    sortFolder(files[i]);
}

function getExtension(file){
    // asjfabhsfa.jpg => ["askjdjabhsd" , "jpg"].pop();
    return file.split(".").pop();
}

function folderExist(extension){
    if(extension == "jpg" || extension == "gif" || extension == "jpeg"){
        // check /testFolder/Images
        return fs.existsSync("./testFolder/Images");
    }
    else if(extension == "pdf" || extension == "doc" || extension =="txt"){
       // check /testFolder/Documents
       return fs.existsSync("./testFolder/Documents");
    }
}

function createFolder(extension){
    if(extension == "jpg" || extension == "gif" || extension == "jpeg"){
        // createFolder /testFolder/Images
        fs.mkdirSync("./testFolder/Images");
    }
    else if(extension == "pdf" || extension == "doc" || extension =="txt"){
       // createFolder /testFolder/Documents
       fs.mkdirSync("./testFolder/Documents");
    }
}

function moveFile(file , extension){
    if(extension == "jpg" || extension == "gif" || extension == "jpeg"){
        // string interpolation
        let sourceFile = `./testFolder/${file}`;
        let destinationFile = `./testFolder/Images/${file}`;
        fs.copyFileSync(sourceFile , destinationFile);
        fs.unlinkSync(sourceFile);
    }
    else if(extension == "pdf" || extension == "doc" || extension =="txt"){
        let sourceFile = `./testFolder/${file}`;
        let destinationFile = `./testFolder/Documents/${file}`;
        fs.copyFileSync(sourceFile , destinationFile);
        fs.unlinkSync(sourceFile);
    }
}

function sortFolder(file){
    // console.log(file);
    let extension = getExtension(file);
    console.log(extension);
    let isFolderExist = folderExist(extension);
    console.log(isFolderExist);
    if(!isFolderExist){
        createFolder(extension);
    }
    moveFile(file , extension);
}
