import { result } from "../scripts.js";

//город
function cityFun() {
    let dateCity = document.querySelector('.date__city');
    dateCity.textContent = (JSON.stringify(result.location.name).slice(1,-1)).toUpperCase();
}

export { cityFun };