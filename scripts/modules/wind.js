import { result } from "./url.js";

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

export { windFun};