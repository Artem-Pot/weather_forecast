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

  //температура и ощущается как 
function temperatureFun() {
  //температура
  const indicatorsTemperature  = document.querySelector('.indicators__temperature');
  indicatorsTemperature.insertAdjacentHTML('beforebegin',`${Math.round((JSON.stringify(result.current.temp_c)))}`);
  //температура ощущается как 
  const indicatorsFeeling  = document.querySelector('.indicators__feeling');
  indicatorsFeeling.insertAdjacentHTML('beforebegin',`${Math.round((JSON.stringify(result.current.feelslike_c)))}`);
}

//город
function cityFun() {
  let dateCity = document.querySelector('.date__city');
  dateCity.insertAdjacentHTML('beforebegin',`${(JSON.stringify(result.location.name).slice(1,-1)).toUpperCase()}`);
}

//влажность
function humidityFun(){
  const indicatorsHumidity = document.querySelector('.indicators__humidity-indicator');
  indicatorsHumidity.insertAdjacentHTML('beforebegin',`${(JSON.stringify(result.current.humidity))}`); 
}

//давление
function pressureFun(){
  const indicatorsPressure = document.querySelector('.indicators__pressure-indicator');
  indicatorsPressure.insertAdjacentHTML('beforebegin',`${Math.round(JSON.stringify(result.current.pressure_mb) * 0.750063755419211)}`);
}

//ветер
function windFun(){
  const indicatorsWind = document.querySelector('.indicators__wind-indicator');
  indicatorsWind.insertAdjacentHTML('beforebegin',`${Math.round(JSON.stringify(result.current.wind_kph) * 0.27777777778)}`);

//направление ветра
const directionWind = document.querySelector('.indicators__directionWind-indicator');
const direction = '';
directionWind.insertAdjacentHTML('beforebegin',`${directionWindFunc()}`);

function directionWindFunc(direction) {
    switch(result.current.wind_dir) {
        case 'N':  
          direction = `Северный`;
          break;
        case 'NNE': 
          direction = `Северо-северо-восточный`;
          break;
        case 'NE': 
          direction = `Северо-восточный`; 
          break;
        case 'ENE': 
          direction = `Востоко-северо-восточный`; 
          break;
        case 'Е': 
          direction = `Восточный`; 
          break;
        case 'ESE': 
          direction = `Востоко-юго-восточный`; 
          break;
         case 'SE': 
          direction = `Юго-восточный`; 
          break;
        case 'SSE': 
          direction = `Юго-юго-восточный`; 
          break;
        case 'S': 
          direction = `Южный`; 
          break;
        case 'SSW': 
          direction = `Юго-юго-западный`; 
          break;
        case 'SW': 
          direction = `Юго-западный`; 
          break;
        case 'WSW': 
          direction = `Западо-юго-западный`; 
          break;
        case 'W': 
          direction = `Западный`; 
          break;
        case 'WNW': 
          direction = `Западо-северо-западный`; 
          break;
        case 'NW': 
            direction = `Северо-западный`; 
            break;
        case 'NNW': 
            direction = `Северо-северо-западный`; 
            break;   
      }
      return direction;
}
}

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

//-----------дата и время-----------------
const newDate = new Date();

const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dateWeekDay  = document.querySelector('.date__week-day');
dateWeekDay.insertAdjacentHTML('beforebegin',`${days[newDate.getDay()]}`);

//текущий день месяца
const dateDay  = document.querySelector('.date__day');
dateDay.insertAdjacentHTML('beforebegin',`${newDate.getDate()}`);

//месяц
const month =['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const dateMonth  = document.querySelector('.date__month');
dateMonth.insertAdjacentHTML('beforebegin',`${month[newDate.getMonth()]}`);

//текущее время
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('.date__time').innerHTML = h + ":" + m;
    setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

//{"location":{"name":"Togliatti","region":"Samara","country":"Russia","lat":53.52,"lon":49.41,"tz_id":"Europe/Samara","localtime_epoch":1705464317,"localtime":"2024-01-17 8:05"},"current":{"last_updated_epoch":1705464000,"last_updated":"2024-01-17 08:00","temp_c":-3.7,"temp_f":25.3,"is_day":0,"condition":{"text":"Blizzard","icon":"//cdn.weatherapi.com/weather/64x64/night/230.png","code":1117},"wind_mph":22.8,"wind_kph":36.7,"wind_degree":187,"wind_dir":"S","pressure_mb":1005,"pressure_in":29.66,"precip_mm":0.27,"precip_in":0.01,"humidity":93,"cloud":100,"feelslike_c":-12.1,"feelslike_f":10.2,"vis_km":0,"vis_miles":0,"uv":1,"gust_mph":35.1,"gust_kph":56.4}}
  
//база городов на английском - изменить на русский