// primitive 

// 7 types : String , Number , Boolean , null, undefined , Symbol, BigInt 

const age = false//boolean
const bat = " batmman "// string 
const isLoggedIn = true
const temp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// // console.log(age);
// // console.log(bat);
// // console.log(temp);
// console.log(id === anotherId);//false 


// const bigNumber = 342634727552n // in last put "n"
// console.log(
// bigNumber
// );




// Reference (Non Primitive )

// Arrays, Objects , Functions 

//ARRAY
const heroes = ["shaktiman" , "naagraj", "dogra"]


//objects
let myObj = {
    name: "vishal",
    age: 34,
}



//FUNCTION
const myFunction = function(){
    console.log("Vishal");
}

console.log(typeof temp);//object 
console.log(typeof myFunction);
console.log(id);