import { result } from "scripts/scripts.js";

//температура и ощущается как 
function temperatureFun() {
    const indicatorsTemperature  = document.querySelector('.indicators__temperature');     //температура
    const indicatorsFeeling  = document.querySelector('.indicators__feeling');     //температура ощущается как

    indicatorsTemperature.textContent = Math.round((JSON.stringify(result.current.temp_c)));
    indicatorsFeeling.textContent = Math.round((JSON.stringify(result.current.feelslike_c)));
}

export { temperatureFun };


