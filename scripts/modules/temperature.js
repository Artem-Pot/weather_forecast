import { result } from "../scripts.js";

const indicatorsTemperature  = document.querySelector('.indicators__temperature');     //температура
const indicatorsFeeling  = document.querySelector('.indicators__feeling');     //температура ощущается как

//температура и ощущается как 
function temperatureFun() {
    indicatorsTemperature.insertAdjacentHTML('beforebegin',`${Math.round((JSON.stringify(result.current.temp_c)))}`);
    indicatorsFeeling.insertAdjacentHTML('beforebegin',`${Math.round((JSON.stringify(result.current.feelslike_c)))}`);
}

export { temperatureFun };


