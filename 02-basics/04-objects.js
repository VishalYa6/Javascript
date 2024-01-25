// const tindeyUser = new Object()
const tindeyUser = {}

 tindeyUser.id = "123abc"
 tindeyUser.name = "ASasdak"
 tindeyUser.isLoggedIn = false 



// console.log((tindeyUser));

const regularUser = {
    email: "som@gamil.com",
    fullname: {
        userfullname: {
            firstname: "vishal",
            lastname: "chaoudhary"
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b" }
// const obj2 = {3:"a", 4:"b" }
// const obj4 = {5:"a", 6:"b" }

// const obj3 = {obj1, obj2} 
//const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1 , ...obj2 , ...obj4}
//console.log(obj3);

const users = [
    {
        id : 1 ,
        email: "h@gmail.com",

    },
    {
        id : 1 ,
        email: "h@gmail.com",

    },
    {
        id : 1 ,
        email: "h@gmail.com",

    },
    {
        id : 1 ,
        email: "h@gmail.com",

    },
]

users[1].email
console.log(tindeyUser);

// console.log(Object.keys(tindeyUser));
// console.log(Object.values(tindeyUser));  //put objects into arrays

// console.log(Object.entries(tindeyUser));
console.log(tindeyUser.hasOwnProperty('isLoggedIn'));