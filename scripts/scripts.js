import { temperatureFun } from "./modules/temperature.js"; //температура
import { cityFun } from "./modules/city.js"; //город
import { windFun } from "./modules/wind.js"; //ветер
import { humidityFun } from "./modules/humidity.js"; //влажность
import { pressureFun } from "./modules/pressure.js"; //давление
import { weatherFun } from "./modules/weather.js"; //погода
import { startTime, startDate } from "./modules/date.js"; //дата и время

//поиск по городу
let formSearch = document.querySelector('#form__search'); //поле ввода
const formButton = document.querySelector('#form__button'); //кнопка поиска

//переменные json запроса
let url = '';
let response;
let result;

//функция поиска по городу
formButton.onclick = function() {
  url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=${formSearch.value}&aqi=no`;
  start();
}

//функция запуска после поиска по городу
async function start() {
  response = await fetch(url);
  result = await response.json();
  temperatureFun();
  cityFun();
  humidityFun();
  pressureFun();
  windFun();
  weatherFun();
}


//{"location":{"name":"Togliatti","region":"Samara","country":"Russia","lat":53.52,"lon":49.41,"tz_id":"Europe/Samara","localtime_epoch":1705464317,"localtime":"2024-01-17 8:05"},"current":{"last_updated_epoch":1705464000,"last_updated":"2024-01-17 08:00","temp_c":-3.7,"temp_f":25.3,"is_day":0,"condition":{"text":"Blizzard","icon":"//cdn.weatherapi.com/weather/64x64/night/230.png","code":1117},"wind_mph":22.8,"wind_kph":36.7,"wind_degree":187,"wind_dir":"S","pressure_mb":1005,"pressure_in":29.66,"precip_mm":0.27,"precip_in":0.01,"humidity":93,"cloud":100,"feelslike_c":-12.1,"feelslike_f":10.2,"vis_km":0,"vis_miles":0,"uv":1,"gust_mph":35.1,"gust_kph":56.4}}
  

//перестала работать функция поиска города
//база городов на английском - изменить на русский
//ключ api перенести в отдельный модуль
// перенести все функции в отдельные модули
//добавить восход и заход солнца
//убрать баш при повторном нажатии на кнопку поиска. Просходит добавление параметров

