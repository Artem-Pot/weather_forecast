import { temperatureFun } from "./modules/temperature.js"; //температура
import { cityFun } from "./modules/city.js"; //город
import { windFun } from "./modules/wind.js"; //ветер
import { humidityFun } from "./modules/humidity.js"; //влажность
import { pressureFun } from "./modules/pressure.js"; //давление
import { weatherFun } from "./modules/weather.js"; //погода
import { startTime, startDate } from "./modules/date.js"; //дата и время

//проба запускать при загрузке страницы инфу по Москве
// function test() {
//   // let url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=Москва&aqi=no&lang=ru`;
//   let url = ``;
//   let response;
//   let result;
//   async function requestJson2() {
//     url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=Москва&aqi=no&lang=ru`;
//     response = await fetch(url);
//     result = await response.json();
//   }

//   requestJson2();
//   setTimeout(start, 400);
// }

// test();

//поиск по городу
const formSearch = document.querySelector('#form__search'); //поле ввода
const formButton = document.querySelector('#form__button'); //кнопка поиска

let url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=Москва&aqi=no&lang=ru`;
let response;
let result;

async function requestJson() {
  response = await fetch(url);
  result = await response.json();
}

//функция поиска по городу
formButton.onclick = function() {
  url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=${formSearch.value}&aqi=no&lang=ru`;
  requestJson();
  setTimeout(start, 400);
  console.log(url);
}

//функция запуска после поиска по городу
function start() {
  temperatureFun();
  cityFun();
  humidityFun();
  pressureFun();
  windFun();
  weatherFun();
  console.log(JSON.stringify(result));
}

export { result };

//добавить чтобы автоматически загружалась погода по Москве 
//ключ api перенести в отдельный модуль
//добавить время восход и заход солнца
//добавить порыв ветра
//убрать баг при повторном нажатии на кнопку поиска. Происходит добавление параметров
//добавить историю на 5 дней вперёд

//pug -w pug/index.pug -o ./ -P

