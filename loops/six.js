const coding = ["js", "ruby", "java", "python"];

// const values = coding.forEach((item) => {
//         //  console.log(item);
//          return item
// })

// console.log(values); output -> undefined

const myNums = [1, 2, 3, 4, 5, 6];

// let newNums = myNums.filter((num) => {
//     return num > 4 // return keyword should been used when we open scope
// } )
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
  { title: "book one", genre: "Science", edition: 2013 },
  { title: "book two", genre: "History", edition: 2015 },
  { title: "book three", genre: "Non-Fiction", edition: 2018 },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "History" && bk.edition >= 2015;
});
console.log(userBooks);
