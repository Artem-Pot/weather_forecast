import { result } from "../scripts.js";

// состояние погоды
function weatherFun() {
    const indicatorsWeather = document.querySelector('.indicators__weather-title');
    const weather = '';
    indicatorsWeather.insertAdjacentHTML('beforebegin',`${WindFunc()}`);
  
  function WindFunc(weather) {
      switch(result.current.condition.text) {
          case 'Sunny':  
          weather = `Солнечно`;
            break;
          case 'Cloudy':  
            weather = `Облачно`;
            break;
          case 'Partly cloudy': 
            weather = `Переменная облачность`;
            break;
          case 'Overcast': 
           weather = `Пасмурная погода`; 
            break;
          case 'Mist': 
            weather = `Туман`; 
            break;
          case 'Patchy rain possible': 
            weather = `Возможен кратковременный дождь`; 
            break;
          case 'Patchy snow possible': 
            weather = `Возможен кратковременный снег`; 
            break;
          case 'Patchy sleet possible': 
            weather = `Возможен кратковременный мокрый снег`; 
            break;
          case 'Patchy freezing drizzle possible': 
            weather = `Возможен кратковременный ледяной дождь`; 
            break;
          case 'Thundery outbreaks possible': 
            weather = `Возможны грозовые вспышки`; 
            break;
          case 'Blowing snow': 
            weather = `Метель`; 
            break;
          case 'Blizzard': 
            weather = `Метель`; 
            break;
          case 'Fog': 
            weather = `Туман`; 
            break;
          case 'Freezing fog': 
            weather = `Ледяной туман`; 
            break;
          case 'Patchy light drizzle': 
            weather = `Небольшой мелкий дождь`; 
            break;
          case 'Light drizzle': 
            weather = `Легкая морось`; 
            break;
          case 'Freezing drizzle': 
            weather = `Изморозь`; 
            break;
          case 'Heavy freezing drizzle': 
            weather = `Сильный ледяной дождь`; 
            break;
          case 'Patchy light rain': 
            weather = `Небольшой дождь`; 
            break;
          case 'Light rain': 
            weather = `Легкий дождь`; 
            break;
          case 'Moderate rain at times': 
            weather = `Временами умеренный дождь`; 
            break;
          case 'Moderate rain': 
            weather = `Умеренный дождь`; 
            break;
          case 'Heavy rain at times': 
            weather = `Временами сильный дождь`; 
            break;
          case 'Heavy rain': 
            weather = `Ливень`; 
            break;
          case 'Light freezing rain': 
            weather = `Легкий ледяной дождь`; 
            break;
          case 'Moderate or heavy freezing rain': 
            weather = `Умеренный или сильный ледяной дождь`; 
            break;
          case 'Light sleet': 
            weather = `Легкий мокрый снег`; 
            break;
          case 'Moderate or heavy sleet': 
            weather = `Умеренный или сильный мокрый снег`; 
            break;
          case 'Patchy light snow': 
            weather = `Небольшой мелкий снег`; 
            break;
          case 'Light snow': 
            weather = `Легкий снег`; 
            break;
          case 'Patchy moderate snow': 
            weather = `Неровный умеренный снег`; 
            break;
          case 'Moderate snow': 
            weather = `Умеренный снег`; 
            break;
          case 'Patchy heavy snow': 
            weather = `Неровный сильный снег`; 
            break;
          case 'Heavy snow': 
            weather = `Сильный снегопад`; 
            break;
          case 'Ice pellets': 
            weather = `Ледяная крупа`; 
            break;
          case 'Light rain shower': 
            weather = `Небольшой моросящий дождь`; 
            break;
          case 'Moderate or heavy rain shower': 
            weather = `Умеренный или сильный ливень`; 
            break;
          case 'Torrential rain shower': 
            weather = `Проливной ливень`; 
            break;
          case 'Light sleet showers': 
            weather = `Небольшой ливень с мокрым снегом`; 
            break;
          case 'Moderate or heavy sleet showers': 
            weather = `Умеренный или сильный ливень с мокрым снегом`; 
            break;
          case 'Light snow showers': 
            weather = `Легкий снегопад`; 
            break;
          case 'Moderate or heavy snow showers': 
            weather = `Умеренный или сильный снегопад`; 
            break;
          case 'Light showers of ice pellets': 
            weather = `Легкий дождь ледяных крупинок`; 
            break;
          case 'Moderate or heavy showers of ice pellets': 
            weather = `Умеренные или сильные ливни ледяной крупы`; 
            break;
          case 'Patchy light rain with thunder': 
            weather = `Небольшой дождь с грозой`; 
            break;
          case 'Moderate or heavy rain with thunder': 
            weather = `Умеренный или сильный дождь с грозой`; 
            break;
          case 'Patchy light snow with thunder': 
            weather = `Небольшой снег с грозой`; 
            break;
          case 'Moderate or heavy snow with thunder': 
            weather = `Умеренный или сильный дождь с грозой`; 
            break;
        }
        return weather;
  }
  
  //иконки погоды
  const indicatorsWeatherImg = document.querySelector('.indicators__weather-img');
  const WeatherImg = result.current.condition.icon.slice(-7, -4); // номер изображения
  const WeatherImgDay = result.current.condition.icon.slice(35, -8); //день или ночь
  
  indicatorsWeatherImg.style.background = (WeatherImgDay === 'day') ? `url(../img/weather/day/${WeatherImg}.png) no-repeat center` 
  : `url(../img/weather/night/${WeatherImg}.png) no-repeat center`;
  }

export { weatherFun };