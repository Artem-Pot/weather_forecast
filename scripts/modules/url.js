import { keyApi } from "../scripts/modules/key.js"; //ключ api
let formSearch = document.querySelector('#form__search'); //поле ввода

const url = `http://api.weatherapi.com/v1/current.json?key=${keyApi}%20&q=${formSearch.value}&aqi=no&lang=ru`;
const response = await fetch(url);
const result = await response.json();

export { result };