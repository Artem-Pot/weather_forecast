import { result } from "../scripts.js";
//восход и заход солнца
function lengthDayFun() {
    let am = (JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(7,-1); //am/pm восход
    let am2 = (JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(7,-1); //am/pm заход
    // let am3 = (JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(1,-7); //восход первые две цифры
    let am4 = (JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(1,-7); //заход первые две цифры;
    console.log(am2);

    function test(){
        switch (am2 === 'PM') {
            case '00':
                am4 = '12';
                break;
            case '01':
                am4 = '13';
                break;
            case '02':
                am4 = '14';
                break;
            case '03':
                am4 = '15';
                break;
            case '04':
                am4 = '16';
                break;
            case '05':
                am4 = '17';
                break;
            case '06':
                am4 = '18';
                break;
            case '07':
                am4 = '19';
                break;
            case '08':
                am4 = '20';
                break;
            case '09':
                am4 = '21';
                break;
            case '10':
                am4 = '22';
                break;
            case '11':
                am4 = '23';
                break;  
        }
        console.log(am4);
        return am4;
    }

    test(am4);
    console.log(am4);
//   console.log(am);
//   console.log(am2);
//   console.log(am3);
//   console.log(am4);

    let sunriseTime = document.querySelector('.indicators__sunrise-time');
    let sunsetTime = document.querySelector('.indicators__sunset-time');
    sunriseTime.textContent = (JSON.stringify(result.forecast.forecastday[0].astro.sunrise)).slice(1,-4);
    sunsetTime.textContent = `${am4} ${(JSON.stringify(result.forecast.forecastday[0].astro.sunset)).slice(3,-4)}`; //заход

}

export { lengthDayFun };