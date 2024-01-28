let counter = 0;

const getData = () => {
  //calls an API and gets DATA
  console.log("Fetching Data ...", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let constext = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(constext, arguments);
    }, d);
  };
};
const betterFunction = debounce(getData, 300);
