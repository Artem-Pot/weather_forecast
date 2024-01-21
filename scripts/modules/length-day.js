import { result } from "../scripts.js";

//восход и заход солнца
function lengthDayFun() {
    let am = (JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(7,-1); //поиск am/pm восход
    let am2 = (JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(7,-1); //поиск am/pm заход
    let am3 = (JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(1,-7); //поиск восход первые две цифры
    let am4 = (JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(1,-7); //поиск заход первые две цифры

    let sunrise24 = (am === 'PM') ? +am3 + +12 : am3; //перевод в 24 часовой формат восхода солнца
    let sunset24 = (am2 === 'PM') ? +am4 + +12 : am4; //перевод в 24 часовой формат захода солнца

    let sunriseTime = document.querySelector('.indicators__sunrise-time');
    let sunsetTime = document.querySelector('.indicators__sunset-time');
    sunriseTime.textContent = `${sunrise24}${(JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(3,-4)}`; //восход первые 2 цифры + 2 последние 2
    sunsetTime.textContent = `${sunset24}${(JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(3,-4)}`; //заход первые 2 цифры + 2 последние 2
}

export { lengthDayFun };