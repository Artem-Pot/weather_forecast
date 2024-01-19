import { result } from "./url.js";

//влажность
function humidityFun(){
    const indicatorsHumidity = document.querySelector('.indicators__humidity-indicator');
    indicatorsHumidity.insertAdjacentHTML('beforebegin',`${(JSON.stringify(result.current.humidity))}`); 
  }

export { humidityFun };