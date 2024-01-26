// const userEmail = " "

// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("dont have user email");
// }

// false values
// {false, 0 , -0, BigInt 0n , "" , null , undefined, NaN}

//truthy values 
// "0", "false" , " ", [] , {} , function(){}


// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj.length === 0)) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10// check null safety 
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // 10 -> output


console.log(val1);


//Terniary Operator

// condition ? true : false


// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

