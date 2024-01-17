const url = 'http://api.weatherapi.com/v1/current.json?key=75b9c736df53403297a115728241601%20&q=Togliatti&aqi=no';
const response = await fetch(url);
const result = await response.json();

console.log(JSON.stringify(result));
//-------------- Блок текущая дата
//город
const dateCity = document.querySelector('.date__city');
dateCity.insertAdjacentHTML('beforebegin',`${(JSON.stringify(result.location.name).slice(1,-1)).toUpperCase()}`);

//день недели и месяц
const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const month =['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const newDate = new Date();

//день недели
const dateWeekDay  = document.querySelector('.date__week-day');
dateWeekDay.insertAdjacentHTML('beforebegin',`${days[newDate.getDay()]}`);
//месяц
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

//----- Блок индикаторы 

//{"location":{"name":"Togliatti","region":"Samara","country":"Russia","lat":53.52,"lon":49.41,"tz_id":"Europe/Samara","localtime_epoch":1705464317,"localtime":"2024-01-17 8:05"},"current":{"last_updated_epoch":1705464000,"last_updated":"2024-01-17 08:00","temp_c":-3.7,"temp_f":25.3,"is_day":0,"condition":{"text":"Blizzard","icon":"//cdn.weatherapi.com/weather/64x64/night/230.png","code":1117},"wind_mph":22.8,"wind_kph":36.7,"wind_degree":187,"wind_dir":"S","pressure_mb":1005,"pressure_in":29.66,"precip_mm":0.27,"precip_in":0.01,"humidity":93,"cloud":100,"feelslike_c":-12.1,"feelslike_f":10.2,"vis_km":0,"vis_miles":0,"uv":1,"gust_mph":35.1,"gust_kph":56.4}}
  


  
