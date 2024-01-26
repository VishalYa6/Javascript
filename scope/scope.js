// var c = 300
let a = 300
if(true){
    let a = 10 
    const b = 20 
    var c = 30
    // console.log("Inner:" ,a);
    //this is block scope
}
//this is global scope 



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const usename = "vishal"
    function two(){
        const website = "youtube"
        console.log(usename);

    }
    //console.log(website);

   // two()
}

//one()

if(true) {
    const username = "vishal"
    if(username === "vishal") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++ interesting ++++++++++++++

console.log(printNo(5));
function printNo(num){
   return num + 1 ;
}

//console.log(addTwo(5));
const addTwo =  function(num){
    return num + 2
}

