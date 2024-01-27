const myNumbers = [1,2, 3, 4, 5, 6, 7, 8];

// const newNums = myNumbers.map((num) => num + 10 )
// console.log(newNums);


// let numbers = myNumbers.forEach((num) => {
//     console.log(`for each num ${num} there is ${num + 10}`);
//  })

const newNums = myNumbers.map((num)=> num * 10).map((num) => num + 10).filter((num) => num <= 30)

 console.log(newNums);//chaining


