import getData from "./lib/services"
const data = getData(1);

data.then((response) => console.log(response))

// getData(1).then((response) => { console.log(response); })