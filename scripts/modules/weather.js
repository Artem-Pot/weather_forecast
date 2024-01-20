import { result } from "../scripts.js";

// состояние погоды
function weatherFun() {
  const indicatorsWeather = document.querySelector('.indicators__weather-title');
  indicatorsWeather.textContent = result.current.condition.text;
    
  //иконки погоды
  const indicatorsWeatherImg = document.querySelector('.indicators__weather-img');
  const WeatherImg = result.current.condition.icon.slice(-7, -4); // номер изображения
  const WeatherImgDay = result.current.condition.icon.slice(35, -8); //день или ночь
  
  indicatorsWeatherImg.style.background = (WeatherImgDay === 'day') 
  ? `url(../img/weather/day/${WeatherImg}.png) no-repeat center` 
  : `url(../img/weather/night/${WeatherImg}.png) no-repeat center`;
  }

export { weatherFun };