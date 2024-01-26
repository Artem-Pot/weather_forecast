import { temperatureFun } from "../scripts/modules/temperature.js"; //температура
import { cityFun } from "../scripts/modules/city.js"; //город
import { windFun } from "../scripts/modules/wind.js"; //ветер
import { humidityFun } from "../scripts/modules/humidity.js"; //влажность
import { pressureFun } from "../scripts/modules/pressure.js"; //давление
import { weatherFun } from "../scripts/modules/weather.js"; //погода
import { startTime, startDate } from "../scripts/modules/date.js"; //дата и время
import { lengthDayFun } from "../scripts/modules/length-day.js"; //восход и заход солнца
import { keyApi } from "../scripts/modules/keyApi.js"; //ключ api

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
  if (response.ok) { //проверка на ошибки запроса
    result = await response.json();
  } else {
    formSearch.style.border = "3px solid red";
    formSearch.value = '';
    formSearch.placeholder = 'Введи корректный запрос';
  }
}

//функция поиска по городу с помощью мыши
formButton.onclick = function() {
  url = `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${formSearch.value}&days=1&aqi=no&alerts=no&lang=ru`;
  requestJson();
  setTimeout(start, 400);
  formSearch.style.border = 'none'; //очистка рамки от красного цвета если была ошибка ранее
  console.clear(); //очистка консоли от ошибок
}

//поиск по нажатию на enter
formSearch.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    formButton.click();
  }
});

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
//добавить адаптив
//добавить автообновление данных каждые 5 минут
//pug -w pug/index.pug -o ./ -P

