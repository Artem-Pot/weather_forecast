let formSearch = document.querySelector('#form__search'); //поле ввода

const url = `http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=${formSearch.value}&aqi=no`;
const response = await fetch(url);
const result = await response.json();

export { result };