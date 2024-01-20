import { result } from "../scripts.js";

//влажность
function humidityFun(){
    const indicatorsHumidity = document.querySelector('.indicators__humidity-indicator');
    indicatorsHumidity.textContent = (JSON.stringify(result.current.humidity));
  }

export { humidityFun };