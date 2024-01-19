import { result } from "./url.js";

//город
function cityFun() {
    let dateCity = document.querySelector('.date__city');
    dateCity.insertAdjacentHTML('beforebegin',`${(JSON.stringify(result.location.name).slice(1,-1)).toUpperCase()}`);
  }

export { cityFun };