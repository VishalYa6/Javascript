const array1 = [1,2,3]


// const myTotal = array1.reduce(function(acc  , curr)  {
//     console.log(`acc : ${acc} and curr : ${curr}`);
//     return acc + curr
// }, 0)

const myTotal = array1.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    }
]


const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price, 0)
console.log(priceToPay);