import getData from "./lib/services"
const data = getData(1);

data.then((response) => console.log(response))