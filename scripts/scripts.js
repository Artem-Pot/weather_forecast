import { temperatureFun } from "../scripts/modules/temperature.js"; //температура
import { cityFun } from "../scripts/modules/city.js"; //город
import { windFun } from "../scripts/modules/wind.js"; //ветер
import { humidityFun } from "../scripts/modules/humidity.js"; //влажность
import { pressureFun } from "../scripts/modules/pressure.js"; //давление
import { weatherFun } from "../scripts/modules/weather.js"; //погода
import { startTime, startDate } from "../scripts/modules/date.js"; //дата и время
import { lengthDayFun } from "../scripts/modules/length-day.js"; //восход и заход солнца
import { keyApi } from "./modules/keyApi.js"; //ключ api

// ./key.js"
// ../scripts/key.js"
//../scripts/modules/key.js

//поиск по городу
const formSearch = document.querySelector('#form__search'); //поле ввода
const formButton = document.querySelector('#form__button'); //кнопка поиска

let url = `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=Москва&days=1&aqi=no&alerts=no&lang=ru`;
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
  url = `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${formSearch.value}&days=1&aqi=no&alerts=no&lang=ru`;
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
}

export { result };

//на гит хаб относительные пути модулей работают не так
//добавить порыв ветра
//добавить историю на 5 дней вперёд
//стилизовать 

//pug -w pug/index.pug -o ./ -P

