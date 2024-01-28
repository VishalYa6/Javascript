
// //using closure we can achieve data encapsulation
// function increment(){
//     let count = 0
//     //lexical environment 
//     return function () {
//         count = count + 1
//          return count 
//     }
// }
    
// const myInc = increment()

// console.log(myInc());
// console.log(myInc());
// console.log(myInc());

//Memorization

// function memorizeSquare() {
//     const cache = {}
    
//     return function(n){
//         if (n in cache){
//             console.log("returned from cache");
//             return  cache[n]
//         }
//        cache[n] =  n * n
//         console.log("calculating");
//        return cache[n]
//     }
// }

// const memoSquare = memorizeSquare()

// console.log(memoSquare(5));// calculate 
// console.log(memoSquare(5));//return from cache


function x(){
    var a = 7 ;
    function y(){
        console.log(a);
    }
    y();
}
x();