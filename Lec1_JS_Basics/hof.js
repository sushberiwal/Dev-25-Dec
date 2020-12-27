// High Order functions => functions which accept function as a paramter are known as hof
// CallBack Functioins => function which are sent in a function are known as callback functions

function getFirstName(fullName){
    // "steve Rogers" => [ "steve" , "rogers" ];
    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function fun( fullName , cb ){
    let name = cb(fullName);
    console.log(name);
}



fun("Steve ROgers" , getFirstName);
fun("Tony Stark", getLastName);