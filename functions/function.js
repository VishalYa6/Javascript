// console.log("H");
// console.log("I");
// console.log("T");
// console.log("s");


// function sayMyName(){
//     console.log("H");
//  console.log("I");
//  console.log("T");
//  console.log("s");

// }

// sayMyName()


// function addTwoNo(number1 , number2){
    
//     console.log( number1+number2);
// }

// function addTwoNo(number1 , number2){
    
// //    let result = number1 + number2
// //    return result
//    return number1 + number2
// }

// const result = addTwoNo(1, 5)

// console.log(result); // undefined 

// function loginUserMessage(username = "sam"){
//     if(!username){
//            console.log("Please enter username");
//            return 
//     }
//     return `${username} just logged in`
// }


// // console.log(loginUserMessage("vishal"));

// console.log(loginUserMessage("hitesh"));

// function calculateCartPrice(val1 , val2 , ...num1){
//      return num1 
// }
// console.log(calculateCartPrice(200 , 400 , 500, 2000));

const user = {
    username: " Vishak ",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray =[200 , 400 , 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));
