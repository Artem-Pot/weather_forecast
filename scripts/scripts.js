import { temperatureFun } from "./modules/temperature.js"; //температура
import { cityFun } from "./modules/city.js"; //город
import { windFun } from "./modules/wind.js"; //ветер
import { humidityFun } from "./modules/humidity.js"; //влажность
import { pressureFun } from "./modules/pressure.js"; //давление
import { weatherFun } from "./modules/weather.js"; //погода
import { startTime, startDate } from "./modules/date.js"; //дата и время
import { lengthDayFun } from "./modules/length-day.js"; //восход и заход солнца


//поиск по городу
const formSearch = document.querySelector('#form__search'); //поле ввода
const formButton = document.querySelector('#form__button'); //кнопка поиска

let url = `http://api.weatherapi.com/v1/forecast.json?key=75b9c736df53403297a115728241601&q=Москва&days=1&aqi=no&alerts=no&lang=ru`;
let response;
let result;

//запуск при загрузке страницы базовых показателей г.Москва
function loading() {
  requestJson();
  setTimeout(start, 400);
}

loading();

async function requestJson() {
  response = await fetch(url);
  result = await response.json();
}

//функция поиска по городу
formButton.onclick = function() {
  url = `http://api.weatherapi.com/v1/forecast.json?key=75b9c736df53403297a115728241601&q=${formSearch.value}&days=1&aqi=no&alerts=no&lang=ru`;
  requestJson();
  setTimeout(start, 400);
}

//функция запуска после поиска по городу
function start() {
  temperatureFun();
  cityFun();
  humidityFun();
  pressureFun();
  windFun();
  weatherFun();
  lengthDayFun();
  //console.log(JSON.stringify(result));
  // console.log(JSON.stringify((result.forecast.forecastday[0].astro.sunrise)).slice(1,-4));
}

export { result };



//время восхода и захода в 24 формате часов
//ключ api перенести в отдельный модуль

//добавить порыв ветра
//добавить историю на 5 дней вперёд
//стилизовать 

//pug -w pug/index.pug -o ./ -P

