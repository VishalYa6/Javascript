const user  = {
    username: "vishal",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);//emty{}

// function chai(){
//     let username = " vishal "
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "vishal"
//     console.log(this.username);
// }
const chai = () => {
    let username = "vishal"
    console.log(this);
}

//chai()

//const addTwo = (num1 , num2) =>  num1 + num2 //implicit return
//const addTwo = (num1 , num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ({username:"vishal"})
console.log(addTwo(2, 4));


//const myArray = [2, 5 , 6, 7, 8]

//myArray.forEach()