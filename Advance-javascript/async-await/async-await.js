async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}
async function main() {
  console.log("Loading modules");
  console.log("superman");

  let data = await getData();
  console.log(data);
  console.log("batman");
  console.log("cyyberboy");
}


main()

// data.then((v)=>{
//     console.log(data);
//     console.log("batman");
// })
