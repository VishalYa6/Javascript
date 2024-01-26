//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();


//()() function definition and second is execution
// global scope polluution ko remove krne ke liye iife use krte hai

( (name) => {
   //simple IIFE
    console.log(`db connected two ${name}`);
})("viishak");